
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./App.css";

function getTodayDate() {
  const today = new Date();
  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, "0");
  const day = String(today.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

function PersonalStyleConsultation() {
  const navigate = useNavigate();

  const [selectedDate, setSelectedDate] = useState("");
  const [selectedSlotId, setSelectedSlotId] = useState("");
  const [availableSlots, setAvailableSlots] = useState([]);
  const [loadingSlots, setLoadingSlots] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [styleGoals, setStyleGoals] = useState("");
  const [message, setMessage] = useState("");

  const selectedDay = selectedDate
    ? new Date(`${selectedDate}T12:00:00`).getDay()
    : null;

  const isAvailableDay = [1, 2, 3].includes(selectedDay);

  useEffect(() => {
    if (!selectedDate || !isAvailableDay) {
      setAvailableSlots([]);
      setSelectedSlotId("");
      return;
    }

    const controller = new AbortController();

    async function fetchSlots() {
      setLoadingSlots(true);
      setAvailableSlots([]);
      setSelectedSlotId("");
      setMessage("");

      try {
        const response = await fetch(
          `http://localhost:5000/styling/slots?date=${selectedDate}`,
          { signal: controller.signal }
        );

        const data = await response.json();

        if (!response.ok) {
          throw new Error(data.message || "Could not load available slots.");
        }

        setAvailableSlots(
          Array.isArray(data) ? data : data.slots || []
        );
      } catch (error) {
        if (error.name !== "AbortError") {
          setMessage(
            error.message || "Unable to load slots. Please try again."
          );
        }
      } finally {
        if (!controller.signal.aborted) {
          setLoadingSlots(false);
        }
      }
    }

    fetchSlots();

    return () => controller.abort();
  }, [selectedDate, isAvailableDay]);

  const handleDateChange = (event) => {
    setSelectedDate(event.target.value);
    setSelectedSlotId("");
    setMessage("");
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setMessage("");

    if (!isAvailableDay) {
      setMessage("Please select a Monday, Tuesday or Wednesday.");
      return;
    }

    if (!selectedSlotId) {
      setMessage("Please select an available time slot.");
      return;
    }

    const email = contact.trim();

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setMessage("Please enter a valid email address.");
      return;
    }

    setSubmitting(true);

    try {
      const response = await fetch(
        "http://localhost:5000/styling/bookings",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            service_id: 1,
            slot_id: Number(selectedSlotId),
            customer_name: name.trim(),
            customer_email: email,
          }),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(
          data.message || "Booking failed. Please try another slot."
        );
      }

      setMessage(
        `Your slot is temporarily reserved. Booking ID: ${data.bookingId}. Payment is pending, so your appointment is not confirmed yet.`
      );

      setSelectedSlotId("");

      // Reload slots to reflect the reservation.
      const slotsResponse = await fetch(
        `http://localhost:5000/styling/slots?date=${selectedDate}`
      );

      const slotsData = await slotsResponse.json();

      if (slotsResponse.ok) {
        setAvailableSlots(
          Array.isArray(slotsData) ? slotsData : slotsData.slots || []
        );
      }
    } catch (error) {
      setMessage(
        error.message || "Something went wrong. Please try again."
      );
    } finally {
      setSubmitting(false);
    }
  };

  const formatTime = (time) => {
    if (!time) return "";

    const [hours, minutes] = time.split(":").map(Number);
    const suffix = hours >= 12 ? "PM" : "AM";
    const displayHours = hours % 12 || 12;

    return `${displayHours}:${String(minutes).padStart(2, "0")} ${suffix}`;
  };

  const inputStyle = {
    width: "100%",
    padding: "14px 15px",
    background: "#151515",
    color: "#ffffff",
    border: "1px solid #383838",
    borderRadius: "8px",
    fontSize: "15px",
    boxSizing: "border-box",
    outline: "none",
  };

  const labelStyle = {
    display: "block",
    marginBottom: "9px",
    color: "#e5e5e5",
    fontSize: "14px",
    fontWeight: "500",
  };

  return (
    <main
      className="psc-page"
      style={{
        minHeight: "100vh",
        background: "#0b0b0b",
        color: "#ffffff",
        padding: "55px 20px 80px",
        boxSizing: "border-box",
      }}
    >
      <div style={{ maxWidth: "1080px", margin: "0 auto" }}>
        <button
          type="button"
          onClick={() => navigate("/Styling")}
          style={{
            background: "transparent",
            border: "none",
            color: "#c5a46d",
            cursor: "pointer",
            fontSize: "14px",
            marginBottom: "35px",
            padding: "8px 0",
          }}
        >
          ← Back to Styling
        </button>

        <div
          style={{
            textAlign: "center",
            maxWidth: "700px",
            margin: "0 auto 45px",
          }}
        >
          <p
            style={{
              color: "#c5a46d",
              fontSize: "12px",
              letterSpacing: "3px",
              fontWeight: "600",
              marginBottom: "18px",
            }}
          >
            URBAN RAJA · PERSONAL STYLING
          </p>

          <h1
            style={{
              fontSize: "clamp(32px, 5vw, 54px)",
              lineHeight: "1.15",
              margin: "0 0 18px",
              fontWeight: "600",
              color: "#8a7979",
            }}
          >
            Personal Style
            <br />
            Consultation
          </h1>

          <p
            style={{
              color: "#aaaaaa",
              fontSize: "16px",
              lineHeight: "1.8",
              margin: "0 auto",
            }}
          >
            Discover your personal style with one-to-one guidance tailored to
            your preferences, lifestyle and fashion goals.
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 300px), 1fr))",
            gap: "35px",
            alignItems: "start",
          }}
        >
          <section
            style={{
              background: "#111111",
              border: "1px solid #292929",
              borderRadius: "14px",
              padding: "30px",
            }}
          >
            <p
              style={{
                color: "#c5a46d",
                fontSize: "12px",
                letterSpacing: "2px",
                marginTop: 0,
              }}
            >
              YOUR STYLING SESSION
            </p>

            <h2
              style={{
                fontSize: "25px",
                lineHeight: "1.4",
                margin: "12px 0",
                color: "#eeeeee",
              }}
            >
              Find Your Signature Style
            </h2>

            <p
              style={{
                color: "#aaaaaa",
                lineHeight: "1.8",
                fontSize: "14px",
              }}
            >
              A focused one-to-one consultation to help you make better fashion
              choices and build a style that feels like you.
            </p>

            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                borderTop: "1px solid #303030",
                borderBottom: "1px solid #303030",
                padding: "22px 0",
                margin: "25px 0",
                gap: "15px",
              }}
            >
              <div>
                <p style={{ color: "#999999", margin: "0 0 7px", fontSize: "13px" }}>
                  Consultation fee
                </p>
                <strong style={{ fontSize: "32px", color: "#c5a46d" }}>
                  ₹299
                </strong>
              </div>

              <div style={{ textAlign: "right" }}>
                <p style={{ color: "#999999", margin: "0 0 7px", fontSize: "13px" }}>
                  Duration
                </p>
                <strong style={{ fontSize: "17px" }}>15 minutes</strong>
              </div>
            </div>

            <h3 style={{ fontSize: "16px", marginBottom: "18px" }}>
              What you'll get
            </h3>

            {[
              "Personal style guidance",
              "Colour and fit recommendations",
              "Advice based on your lifestyle",
              "Suggestions for improving your outfits",
            ].map((item) => (
              <div
                key={item}
                style={{
                  display: "flex",
                  gap: "12px",
                  marginBottom: "16px",
                  color: "#d0d0d0",
                  fontSize: "14px",
                  lineHeight: "1.6",
                }}
              >
                <span style={{ color: "#c5a46d" }}>✓</span>
                <span>{item}</span>
              </div>
            ))}

            <div
              style={{
                background: "#191919",
                padding: "17px",
                borderRadius: "8px",
                marginTop: "25px",
              }}
            >
              <p style={{ margin: "0 0 9px", fontWeight: "600" }}>
                Available days
              </p>
              <p
                style={{
                  color: "#aaaaaa",
                  margin: 0,
                  lineHeight: "1.8",
                  fontSize: "14px",
                }}
              >
                Monday, Tuesday and Wednesday
                <br />
                7:00 PM – 8:00 PM
              </p>
            </div>
          </section>

          <section
            style={{
              background: "#111111",
              border: "1px solid #292929",
              borderRadius: "14px",
              padding: "30px",
            }}
          >
            <h2
              style={{
                fontSize: "25px",
                margin: "0 0 10px",
                color: "#eeeeee",
              }}
            >
              Schedule Your Session
            </h2>

            <p
              style={{
                color: "#999999",
                fontSize: "14px",
                lineHeight: "1.7",
                marginBottom: "28px",
              }}
            >
              Choose your preferred date and available 15-minute time slot.
            </p>

            <form onSubmit={handleSubmit}>
              <div style={{ marginBottom: "22px" }}>
                <label style={labelStyle} htmlFor="psc-name">
                  Full Name *
                </label>
                <input
                  id="psc-name"
                  type="text"
                  autoComplete="name"
                  placeholder="Enter your full name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  style={inputStyle}
                  required
                />
              </div>

              <div style={{ marginBottom: "22px" }}>
                <label style={labelStyle} htmlFor="psc-contact">
                  Email Address *
                </label>
                <input
                  id="psc-contact"
                  type="email"
                  autoComplete="email"
                  placeholder="Enter your email address"
                  value={contact}
                  onChange={(e) => setContact(e.target.value)}
                  style={inputStyle}
                  required
                />
              </div>

              <div style={{ marginBottom: "22px" }}>
                <label style={labelStyle} htmlFor="psc-date">
                  Select Date *
                </label>
                <input
                  id="psc-date"
                  type="date"
                  min={getTodayDate()}
                  value={selectedDate}
                  onChange={handleDateChange}
                  style={{ ...inputStyle, colorScheme: "dark" }}
                  required
                />

                {selectedDate && (
                  <p
                    style={{
                      color: isAvailableDay ? "#c5a46d" : "#ff8585",
                      fontSize: "13px",
                      lineHeight: "1.6",
                      marginBottom: 0,
                    }}
                  >
                    {isAvailableDay
                      ? "Available day. Select a time slot below."
                      : "Consultations are available only on Monday, Tuesday and Wednesday."}
                  </p>
                )}
              </div>

              <div style={{ marginBottom: "22px" }}>
                <label style={labelStyle}>
                  Available Time Slots *
                </label>

                {!selectedDate ? (
                  <p style={{ color: "#888888", fontSize: "14px" }}>
                    Select a date to see available slots.
                  </p>
                ) : !isAvailableDay ? (
                  <p style={{ color: "#ff8585", fontSize: "14px" }}>
                    Please choose an available weekday.
                  </p>
                ) : loadingSlots ? (
                  <p style={{ color: "#aaaaaa", fontSize: "14px" }}>
                    Loading available slots...
                  </p>
                ) : availableSlots.length === 0 ? (
                  <p style={{ color: "#aaaaaa", fontSize: "14px" }}>
                    No available slots for this date. Please select another date.
                  </p>
                ) : (
                  <div
                    style={{
                      display: "grid",
                      gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
                      gap: "10px",
                    }}
                  >
                    {availableSlots.map((slot) => {
                      const isSelected =
                        String(selectedSlotId) === String(slot.id);

                      return (
                        <button
                          key={slot.id}
                          type="button"
                          onClick={() => {
                            setSelectedSlotId(String(slot.id));
                            setMessage("");
                          }}
                          aria-pressed={isSelected}
                          style={{
                            padding: "14px 8px",
                            borderRadius: "8px",
                            border: isSelected
                              ? "1px solid #c5a46d"
                              : "1px solid #383838",
                            background: isSelected ? "#c5a46d" : "#171717",
                            color: isSelected ? "#111111" : "#eeeeee",
                            fontSize: "13px",
                            fontWeight: isSelected ? "600" : "400",
                            cursor: "pointer",
                          }}
                        >
                          {formatTime(slot.start_time)} - {formatTime(slot.end_time)}
                        </button>
                      );
                    })}
                  </div>
                )}
              </div>

              <div style={{ marginBottom: "24px" }}>
                <label style={labelStyle} htmlFor="psc-goals">
                  What would you like help with? (Optional)
                </label>
                <textarea
                  id="psc-goals"
                  placeholder="For example: casual outfits, colour matching, finding the right fit..."
                  value={styleGoals}
                  onChange={(e) => setStyleGoals(e.target.value)}
                  rows={4}
                  style={{
                    ...inputStyle,
                    resize: "vertical",
                    fontFamily: "inherit",
                  }}
                />
              </div>

              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  gap: "12px",
                  padding: "18px 0",
                  borderTop: "1px solid #303030",
                  marginBottom: "18px",
                }}
              >
                <span style={{ color: "#aaaaaa", fontSize: "14px" }}>
                  Total consultation fee
                </span>
                <strong style={{ fontSize: "24px", color: "#c5a46d" }}>
                  ₹299
                </strong>
              </div>

              <button
                type="submit"
                disabled={submitting || loadingSlots}
                style={{
                  width: "100%",
                  padding: "16px",
                  border: "none",
                  borderRadius: "8px",
                  background: submitting ? "#8e7b56" : "#c5a46d",
                  color: "#111111",
                  fontSize: "15px",
                  fontWeight: "700",
                  cursor: submitting ? "wait" : "pointer",
                  opacity: submitting || loadingSlots ? 0.7 : 1,
                }}
              >
                {submitting ? "Processing..." : "Continue to Booking →"}
              </button>

              {message && (
                <div
                  role="status"
                  style={{
                    marginTop: "18px",
                    padding: "15px",
                    border: "1px solid #665638",
                    borderRadius: "8px",
                    color: "#e7d1a8",
                    background: "#1b1812",
                    fontSize: "14px",
                    lineHeight: "1.7",
                  }}
                >
                  {message}
                </div>
              )}

              <p
                style={{
                  color: "#777777",
                  fontSize: "12px",
                  lineHeight: "1.7",
                  textAlign: "center",
                  marginTop: "18px",
                }}
              >
                Your appointment is not confirmed until payment is completed
                and the booking is confirmed.
              </p>
            </form>
          </section>
        </div>
      </div>
    </main>
  );
}

export default PersonalStyleConsultation;