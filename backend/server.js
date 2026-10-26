require("dotenv").config();

const express = require("express");
const path = require("path");
const mysql = require("mysql2");
const cors = require("cors");
const bcrypt = require("bcrypt");
const nodemailer = require("nodemailer");



const app = express();

app.use(
  "/images",
  express.static(path.join(__dirname, "../public/images"))
);

// ==========================================
// EMAIL TRANSPORTER
// ==========================================

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_APP_PASSWORD
  }
});


// ==========================================
// MIDDLEWARE
// ==========================================

app.use(cors());
app.use(express.json());


// ==========================================
// MYSQL DATABASE
// ==========================================

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "1234567890",
  database: "urban_raja"
});

db.connect((err) => {
  if (err) {
    console.log("MySQL connection failed:", err);
    return;
  }

  console.log("MySQL connected successfully!");
});


// ==========================================
// HOME
// ==========================================

app.get("/", (req, res) => {
  res.send("Urban Raja Backend is running!");
});


// ==========================================
// BLOGS
// ==========================================

app.get("/blogs", (req, res) => {
  const sql = "SELECT * FROM blogs";

  db.query(sql, (err, results) => {
    if (err) {
      res.status(500).json({
        error: err.message
      });
      return;
    }

    res.json(results);
  });
});


// ==========================================
// SINGLE BLOG
// ==========================================

app.get("/blogs/:id", (req, res) => {
  const blogId = req.params.id;

  const blogSql = "SELECT * FROM blogs WHERE id = ?";

  db.query(blogSql, [blogId], (err, blogResults) => {

    if (err) {
      res.status(500).json({
        error: err.message
      });
      return;
    }

    if (blogResults.length === 0) {
      res.status(404).json({
        error: "Blog not found"
      });
      return;
    }

    const sectionsSql = `
      SELECT *
      FROM blog_sections
      WHERE blog_id = ?
      ORDER BY section_order
    `;

    db.query(
      sectionsSql,
      [blogId],
      (err, sectionResults) => {

        if (err) {
          res.status(500).json({
            error: err.message
          });
          return;
        }

        res.json({
          blog: blogResults[0],
          sections: sectionResults
        });
      }
    );
  });
});


// ==========================================
// STYLE GUIDES
// ==========================================

app.get("/style-guides", (req, res) => {

  const sql = "SELECT * FROM style_guides";

  db.query(sql, (err, results) => {

    if (err) {
      res.status(500).json({
        error: err.message
      });
      return;
    }

    res.json(results);
  });
});


// ==========================================
// SINGLE STYLE GUIDE
// ==========================================

app.get("/style-guides/:id", (req, res) => {

  const styleGuideId = req.params.id;

  const styleGuideSql =
    "SELECT * FROM style_guides WHERE id = ?";

  db.query(
    styleGuideSql,
    [styleGuideId],
    (err, guideResults) => {

      if (err) {
        res.status(500).json({
          error: err.message
        });
        return;
      }

      if (guideResults.length === 0) {
        res.status(404).json({
          error: "Style Guide not found"
        });
        return;
      }

      const sectionsSql = `
        SELECT *
        FROM style_guide_sections
        WHERE style_guide_id = ?
        ORDER BY section_order
      `;

      db.query(
        sectionsSql,
        [styleGuideId],
        (err, sectionResults) => {

          if (err) {
            res.status(500).json({
              error: err.message
            });
            return;
          }

          res.json({
            styleGuide: guideResults[0],
            sections: sectionResults
          });
        }
      );
    }
  );
});


// ==========================================
// BLOGS BY CATEGORY
// ==========================================

app.get("/blogs/category/:category", (req, res) => {

  const category = req.params.category;

  const sql =
    "SELECT * FROM blogs WHERE category = ?";

  db.query(
    sql,
    [category],
    (err, results) => {

      if (err) {
        res.status(500).json({
          error: err.message
        });
        return;
      }

      res.json(results);
    }
  );
});


// ==========================================
// REGISTER / CREATE ACCOUNT
// ==========================================

app.post("/register", async (req, res) => {

  const {
    contact,
    password,
    birth_month,
    birth_day,
    birth_year,
    name,
    username
  } = req.body;


  // ==========================================
  // 1. REQUIRED FIELDS
  // ==========================================

  if (
    !contact ||
    !password ||
    !birth_month ||
    !birth_day ||
    !birth_year ||
    !name ||
    !username
  ) {

    return res.status(400).json({
      error: "All fields are required."
    });
  }


  // ==========================================
  // 2. CHECK CONTACT
  // Gmail OR Phone
  // ==========================================

  const gmailRegex =
  /^[a-zA-Z0-9._%+-]+@gmail\.com$/;

  const phoneRegex =
    /^[0-9]{10}$/;

  let email = null;
  let phone = null;


  // Gmail
  if (gmailRegex.test(contact)) {

    email = contact.toLowerCase();

  }

  // Phone
  else if (phoneRegex.test(contact)) {

    phone = contact;

  }

  // Invalid
  else {

    return res.status(400).json({
      error:
        "Please enter a valid Gmail address or 10-digit phone number."
    });
  }


  try {

    // ==========================================
    // 3. CHECK DUPLICATE USER
    // ==========================================

    const checkSql = `
      SELECT id, email, username, phone
      FROM users
      WHERE username = ?
         OR email = ?
         OR phone = ?
    `;

    db.query(
      checkSql,
      [username, email, phone],
      async (err, results) => {

        if (err) {

          console.log(
            "Database error:",
            err
          );

          return res.status(500).json({
            error: "Something went wrong."
          });
        }


        // ==========================================
        // 4. DUPLICATE CHECK
        // ==========================================

        if (results.length > 0) {

          const existingUser = results[0];


          if (
            existingUser.username === username
          ) {

            return res.status(409).json({
              error:
                "This username is already taken. Please choose another username."
            });
          }


          if (
            email &&
            existingUser.email === email
          ) {

            return res.status(409).json({
              error:
                "This Gmail is already used. Please use another Gmail."
            });
          }


          if (
            phone &&
            existingUser.phone === phone
          ) {

            return res.status(409).json({
              error:
                "This phone number is already used."
            });
          }
        }


        // ==========================================
        // 5. HASH PASSWORD
        // ==========================================

        const passwordHash =
          await bcrypt.hash(password, 10);


        // ==========================================
        // 6. GENERATE OTP
        // ==========================================

        const emailVerificationCode =
          email
            ? Math.floor(
                100000 +
                Math.random() * 900000
              ).toString()
            : null;


        const phoneVerificationCode =
          phone
            ? Math.floor(
                100000 +
                Math.random() * 900000
              ).toString()
            : null;


        // ==========================================
        // 7. SEND EMAIL OTP
        // ==========================================

        if (email) {

          const mailOptions = {

            from:
              `"Urban Raja" <${process.env.EMAIL_USER}>`,

            to: email,

            subject:
              "Urban Raja - Email Verification Code",

            text: `
Your Urban Raja verification code is:

${emailVerificationCode}

This code is required to verify your email address.

If you did not create an Urban Raja account, you can ignore this email.
`
          };


          try {

            await transporter.sendMail(
              mailOptions
            );

            console.log(
              `Email verification code sent to ${email}`
            );

          } catch (emailError) {

            console.log(
              "Email sending error:",
              emailError
            );

            return res.status(500).json({
              error:
                "Verification email could not be sent. Please try again."
            });
          }
        }


        // ==========================================
        // 8. CREATE PENDING ACCOUNT
        // ==========================================

        const insertSql = `
          INSERT INTO users
          (
            name,
            username,
            email,
            password_hash,
            birth_month,
            birth_day,
            birth_year,
            phone,
            email_verified,
            phone_verified,
            email_verification_code,
            phone_verification_code,
            account_status
          )
          VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
        `;


        db.query(
          insertSql,
          [

            name,

            username,

            email,

            passwordHash,

            birth_month,

            birth_day,

            birth_year,

            phone,


            // Email verified?
            email
              ? false
              : true,


            // Phone verified?
            phone
              ? false
              : true,


            emailVerificationCode,

            phoneVerificationCode,

            "pending"

          ],

          (err, result) => {

            if (err) {

              console.log(
                "Registration error:",
                err
              );

              return res.status(500).json({
                error:
                  "Account could not be created."
              });
            }


            // ==========================================
            // 9. RESPONSE
            // ==========================================

            if (email) {

              return res.status(201).json({

                message:
                  "Account created. Verification code sent to your Gmail.",

                userId:
                  result.insertId,

                verificationType:
                  "email"

              });

            }


            if (phone) {

              return res.status(201).json({

                message:
                  "Account created. Phone verification is required.",

                userId:
                  result.insertId,

                verificationType:
                  "phone"

              });

            }

          }
        );
      }
    );

  } catch (error) {

    console.log(
      "Registration error:",
      error
    );

    return res.status(500).json({
      error:
        "Something went wrong."
    });
  }
});


// ==========================================
// VERIFY EMAIL
// ==========================================

app.post("/verify-email", (req, res) => {

  const { userId, code } = req.body;

  if (!userId || !code) {
    return res.status(400).json({
      error: "Verification code is required."
    });
  }

  const sql = `
    SELECT *
    FROM users
    WHERE id = ?
      AND email_verification_code = ?
      AND account_status = 'pending'
  `;

  db.query(sql, [userId, code], (err, results) => {

    if (err) {
      console.log("Verification error:", err);

      return res.status(500).json({
        error: "Something went wrong."
      });
    }

    if (results.length === 0) {
      return res.status(400).json({
        error: "Invalid verification code."
      });
    }

    const updateSql = `
      UPDATE users
      SET
        email_verified = true,
        email_verification_code = NULL,
        account_status = 'active'
      WHERE id = ?
    `;

    db.query(updateSql, [userId], (err) => {

      if (err) {
        console.log("Account activation error:", err);

        return res.status(500).json({
          error: "Account could not be activated."
        });
      }

      return res.status(200).json({
        message:
          "Email verified successfully. Your account is now active."
      });

    });

  });

});


/* ==========================================
   PERSONAL STYLING BOOKING APIs
   Paste before app.listen(5000, ...)
========================================== */

// Separate pool for safe booking transactions.
// Existing database connection and APIs remain unchanged.
const bookingPool = mysql.createPool({
  host: "localhost",
  user: "root",
  password: process.env.DB_PASSWORD || "1234567890",
  database: "urban_raja",
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

const bookingDb = bookingPool.promise();


// 1. GET ACTIVE STYLING SERVICES
app.get("/styling/services", async (req, res) => {
  try {
    const [services] = await bookingDb.query(`
      SELECT id, service_name, price, duration_minutes
      FROM styling_services
      WHERE is_active = TRUE
      ORDER BY id
    `);

    res.json(services);
  } catch (error) {
    console.error("Styling services error:", error.message);
    res.status(500).json({
      error: "Could not load styling services."
    });
  }
});


// 2. GET AVAILABLE SLOTS FOR A DATE
app.get("/styling/slots", async (req, res) => {
  const { date } = req.query;

  // Require a date in YYYY-MM-DD format.
  if (
    typeof date !== "string" ||
    !/^\d{4}-\d{2}-\d{2}$/.test(date)
  ) {
    return res.status(400).json({
      error: "Please provide a date in YYYY-MM-DD format."
    });
  }

  try {
    // Validate the actual calendar date.
   const [dateCheck] = await bookingDb.query(
  "SELECT DATE_FORMAT(?, '%Y-%m-%d') AS selected_date",
  [date]
);

 console.log("Requested date:", date);
  console.log("MySQL dateCheck:", dateCheck);

    if (
      !dateCheck[0].selected_date ||
      String(dateCheck[0].selected_date).slice(0, 10) !== date
    ) {
      return res.status(400).json({
        error: "Please provide a valid calendar date."
      });
    }

    // Expire unpaid reservations whose 15-minute hold has ended.
    const connection = await bookingDb.getConnection();

    try {
      await connection.beginTransaction();

      await connection.query(`
        UPDATE styling_bookings
        SET booking_status = 'expired'
        WHERE booking_status = 'pending_payment'
          AND payment_status = 'pending'
          AND reservation_expires_at IS NOT NULL
          AND reservation_expires_at <= NOW()
      `);

      await connection.query(`
        UPDATE styling_slots s
        JOIN styling_bookings b ON b.slot_id = s.id
        SET s.status = 'available'
        WHERE b.booking_status = 'expired'
          AND s.status = 'reserved'
      `);

      await connection.commit();
    } catch (error) {
      await connection.rollback();
      throw error;
    } finally {
      connection.release();
    }

    // MySQL WEEKDAY(): Monday = 0, Tuesday = 1, etc.
    const [availability] = await bookingDb.query(
      `SELECT start_time, end_time, slot_duration_minutes
       FROM styling_availability
       WHERE weekday = WEEKDAY(?) + 1
         AND is_active = TRUE`,
      [date]
    );

    if (availability.length === 0) {
      return res.json([]);
    }

    // Generate the day's 15-minute slots.
    for (const rule of availability) {
      const toMinutes = (time) => {
        const parts = String(time).split(":").map(Number);
        return parts[0] * 60 + parts[1];
      };

      const toTime = (minutes) => {
        const hours = String(Math.floor(minutes / 60)).padStart(2, "0");
        const mins = String(minutes % 60).padStart(2, "0");
        return `${hours}:${mins}:00`;
      };

      const start = toMinutes(rule.start_time);
      const end = toMinutes(rule.end_time);
      const duration = Number(rule.slot_duration_minutes);

      if (!duration || duration <= 0) continue;

      for (
        let current = start;
        current + duration <= end;
        current += duration
      ) {
        await bookingDb.query(
          `INSERT IGNORE INTO styling_slots
             (slot_date, start_time, end_time, status)
           VALUES (?, ?, ?, 'available')`,
          [date, toTime(current), toTime(current + duration)]
        );
      }
    }

    // Only show slots still available.
    const [slots] = await bookingDb.query(
      `SELECT id, slot_date, start_time, end_time
       FROM styling_slots
       WHERE slot_date = ?
         AND status = 'available'
         AND TIMESTAMP(slot_date, start_time) > NOW()
       ORDER BY start_time`,
      [date]
    );

    res.json(slots);
  } catch (error) {
    console.error("Styling slots error:", error.message);
    res.status(500).json({
      error: "Could not load available slots."
    });
  }
});


// 3. CREATE A TEMPORARY BOOKING RESERVATION
app.post("/styling/bookings", async (req, res) => {
  const {
    service_id,
    slot_id,
    customer_name,
    customer_email
  } = req.body;

  if (
    !Number.isInteger(Number(service_id)) ||
    !Number.isInteger(Number(slot_id)) ||
    !customer_name?.trim() ||
    !customer_email?.trim()
  ) {
    return res.status(400).json({
      error: "Service, slot, name and email are required."
    });
  }

  const email = customer_email.trim().toLowerCase();

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return res.status(400).json({
      error: "Please enter a valid email address."
    });
  }

  let connection;

  try {
    connection = await bookingDb.getConnection();
    await connection.beginTransaction();

    // Lock the selected slot to prevent simultaneous reservations.
    const [slots] = await connection.query(
      `SELECT id, slot_date, start_time, status
       FROM styling_slots
       WHERE id = ?
       FOR UPDATE`,
      [Number(slot_id)]
    );

    if (slots.length === 0) {
      await connection.rollback();
      return res.status(404).json({
        error: "Selected slot was not found."
      });
    }

    const slot = slots[0];

    if (
      slot.status !== "available" ||
      new Date(`${String(slot.slot_date).slice(0, 10)}T${slot.start_time}`) <= new Date()
    ) {
      await connection.rollback();
      return res.status(409).json({
        error: "This slot is no longer available. Please choose another."
      });
    }

    // Always get the price from the database, never from the browser.
    const [services] = await connection.query(
      `SELECT id, price
       FROM styling_services
       WHERE id = ? AND is_active = TRUE`,
      [Number(service_id)]
    );

    if (services.length === 0) {
      await connection.rollback();
      return res.status(404).json({
        error: "Selected styling service was not found."
      });
    }

    const amount = services[0].price;

    // Reserve the slot for 15 minutes while payment is pending.
    const [result] = await connection.query(
      `INSERT INTO styling_bookings
       (service_id, slot_id, customer_name, customer_email,
        amount, booking_status, payment_status, reservation_expires_at)
       VALUES (?, ?, ?, ?, ?, 'pending_payment', 'pending',
               DATE_ADD(NOW(), INTERVAL 15 MINUTE))`,
      [
        Number(service_id),
        Number(slot_id),
        customer_name.trim(),
        email,
        amount
      ]
    );

    await connection.query(
      `UPDATE styling_slots
       SET status = 'reserved'
       WHERE id = ? AND status = 'available'`,
      [Number(slot_id)]
    );

    await connection.query(
      `INSERT INTO styling_payments
       (booking_id, amount, payment_status)
       VALUES (?, ?, 'pending')`,
      [result.insertId, amount]
    );

    await connection.commit();

    res.status(201).json({
      message: "Slot temporarily reserved. Complete payment within 15 minutes.",
      bookingId: result.insertId,
      serviceId: Number(service_id),
      slotId: Number(slot_id),
      amount: amount,
      bookingStatus: "pending_payment",
      paymentStatus: "pending",
      reservationExpiresInMinutes: 15
    });
  } catch (error) {
    if (connection) {
      await connection.rollback();
    }

    console.error("Create styling booking error:", error.message);
    res.status(500).json({
      error: "Could not reserve this slot. Please try again."
    });
  } finally {
    if (connection) {
      connection.release();
    }
  }
});

// ==========================================
// START SERVER
// ==========================================



/* ADMIN LOGIN API */

const jwt = require("jsonwebtoken");

app.post("/admin/login", async (req, res) => {
  const { admin_id, password } = req.body;

  if (
    typeof admin_id !== "string" ||
    typeof password !== "string" ||
    !admin_id.trim() ||
    !password
  ) {
    return res.status(400).json({
      success: false,
      message: "Admin ID and password are required."
    });
  }

  if (!process.env.JWT_SECRET) {
    return res.status(500).json({
      success: false,
      message: "Server configuration error."
    });
  }

  try {
    const [admins] = await bookingDb.query(
      `SELECT id, admin_id, password_hash, is_active
       FROM admin_accounts
       WHERE admin_id = ?
       LIMIT 1`,
      [admin_id.trim()]
    );

    if (!admins.length || !admins[0].is_active) {
      return res.status(401).json({
        success: false,
        message: "Invalid Admin ID or Password."
      });
    }

    const admin = admins[0];

    const matches = await bcrypt.compare(
      password,
      admin.password_hash
    );

    if (!matches) {
      return res.status(401).json({
        success: false,
        message: "Invalid Admin ID or Password."
      });
    }

    const token = jwt.sign(
      { adminId: admin.id, role: "admin" },
      process.env.JWT_SECRET,
      {
        expiresIn: "1h",
        issuer: "urban-raja-studio"
      }
    );

    return res.status(200).json({
      success: true,
      message: "Admin login successful.",
      token,
      admin: {
        id: admin.id,
        admin_id: admin.admin_id
      }
    });
  } catch (error) {
    console.error("Admin login error:", error.message);

    return res.status(500).json({
      success: false,
      message: "Login failed due to a server error."
    });
  }
});


app.listen(5000, () => {

  console.log(
    "Server running on port 5000"
  );

});