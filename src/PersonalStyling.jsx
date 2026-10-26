import { useState } from "react";
import "./App.css";
import { useNavigate } from "react-router-dom";

function PersonalStyling() {

  const [selectedService, setSelectedService] = useState("");

  const handleBooking = (service) => {
    setSelectedService(service);
  };

  const navigate = useNavigate();

  return (
    <div className="personal-styling-page">

      {/* HERO SECTION */}

      <section className="personal-styling-hero">

        <div className="personal-styling-hero-content">

          <span className="personal-styling-eyebrow">
            URBAN RAJA · ONE-TO-ONE STYLING
          </span>

          <h1>
            Your Style.
            <br />
            Personally Curated.
          </h1>

          <p className="personal-styling-hero-description">
            Get personalized fashion guidance from a stylist
            who understands your look, lifestyle and style goals.
          </p>

        </div>

      </section>


      {/* INTRO SECTION */}

      <section className="personal-styling-intro">

        <span>
          PERSONAL STYLE CONSULTATION
        </span>

        <h2>
          Let's Build Your Signature Style
        </h2>

        <p>
          From everyday outfits to special occasions,
          get one-to-one styling advice designed specifically
          around you.
        </p>

      </section>


      {/* SERVICES */}

      <section className="personal-styling-services">

        {/* STYLE CONSULTATION */}

        <div className="personal-service-card">

          <span className="personal-service-number">
            01
          </span>

          <h3>
            Personal Style Consultation
          </h3>

          <p>
            A one-to-one conversation to understand your
            current style, preferences, lifestyle and fashion goals.
          </p>

          <ul>
            <li>Understand your personal style</li>
            <li>Identify your style goals</li>
            <li>Discuss colours and fits</li>
            <li>Personalized fashion direction</li>
          </ul>

         <button
  type="button"
  onClick={() => navigate("/PersonalStyleConsultation")} >
  Book Your Session
  <span>→</span>
</button>
        </div>


        {/* OUTFIT STYLING */}

        <div className="personal-service-card">

          <span className="personal-service-number">
            02
          </span>

          <h3>
            Outfit & Wardrobe Styling
          </h3>

          <p>
            Get practical outfit recommendations and wardrobe
            guidance based on your personal style and lifestyle.
          </p>

          <ul>
            <li>Personalized outfit recommendations</li>
            <li>Wardrobe combination ideas</li>
            <li>Fit and proportion guidance</li>
            <li>Occasion-based styling</li>
          </ul>

          <button
            type="button"
            onClick={() => handleBooking("Outfit & Wardrobe Styling")}
          >
            Book Your Session
            <span>→</span>
          </button>

        </div>

      </section>


      {/* HOW IT WORKS */}

      <section className="personal-how-it-works">

        <span>
          HOW IT WORKS
        </span>

        <h2>
          Your Styling Journey
        </h2>

        <div className="personal-steps">

          <div className="personal-step">

            <strong>01</strong>

            <h3>
              Book
            </h3>

            <p>
              Choose your preferred styling session.
            </p>

          </div>


          <div className="personal-step">

            <strong>02</strong>

            <h3>
              Connect
            </h3>

            <p>
              Join your scheduled one-to-one video consultation.
            </p>

          </div>


          <div className="personal-step">

            <strong>03</strong>

            <h3>
              Transform
            </h3>

            <p>
              Get personalized advice to elevate your style.
            </p>

          </div>

        </div>

      </section>


      {/* BOOKING STATUS */}

      {selectedService && (

        <div className="personal-booking-message">

          <div>

            <button
              type="button"
              onClick={() => setSelectedService("")}
            >
              ×
            </button>

            <h2>
              {selectedService}
            </h2>

            <p>
              Booking system coming soon.
              Your styling session will be available
              to schedule here.
            </p>

          </div>

        </div>

      )}


      {/* FINAL CTA */}

      <section className="personal-styling-footer">

        <h2>
          Dress Better.
          <br />
          Feel Better.
        </h2>

        <p>
          Your style is personal. Your experience should be too.
        </p>

      </section>

    </div>
  );
}

export default PersonalStyling;