
require("dotenv").config();

const mysql = require("mysql2");
const bcrypt = require("bcrypt");
const readline = require("readline");

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: process.env.DB_PASSWORD || "1234567890",
  database: "urban_raja"
});

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

async function createAdmin() {
  try {
    const adminId = await new Promise((resolve) => {
      rl.question("Enter Admin ID: ", resolve);
    });

    const password = await new Promise((resolve) => {
      rl.question("Enter Admin Password: ", resolve);
    });

    if (!adminId.trim() || password.length < 12) {
      throw new Error(
        "Admin ID is required and password must be at least 12 characters."
      );
    }

    const passwordHash = await bcrypt.hash(password, 12);

    db.query(
      `INSERT INTO admin_accounts (admin_id, password_hash)
       VALUES (?, ?)`,
      [adminId.trim(), passwordHash],
      (err) => {
        if (err) {
          console.error("Admin creation failed:", err.code || err.message);
        } else {
          console.log("Admin account created successfully!");
        }

        rl.close();
        db.end();
      }
    );
  } catch (error) {
    console.error(error.message);
    rl.close();
    db.end();
  }
}

createAdmin();
