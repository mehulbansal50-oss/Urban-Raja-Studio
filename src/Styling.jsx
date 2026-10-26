 
import { useNavigate } from "react-router-dom";
import "./App.css";
import aistylist  from "./assets/aistylist.png";

function Styling() {

  const navigate = useNavigate();

  return (
    <div className="one-to-one-page">

      {/* HERO SECTION */}

      <section className="styling-hero">

        <div className="styling-hero-content">

          <img className="ai-styling-page" src={aistylist} alt="aistylist"/>

        </div>

      </section>

      {/* INTRODUCTION */}

      <section className="styling-intro">

        <span className="styling-small-heading">
          THE ART OF PERSONAL STYLE
        </span>

        <h2 className="styleExperience">Choose Your Styling Experience</h2>

        <p>
          Whether you want instant AI-powered inspiration
          or personal guidance, your style journey starts here.
        </p>

      </section>

      {/* STYLING OPTIONS */}

      <section className="styling-options">

        {/* AI STYLIST CARD */}

        <article className="styling-card">

          <div className="styling-card-top">

            <span className="styling-tag">
              AI POWERED
            </span>

            <span className="styling-card-icon">
              ✦
            </span>

          </div>

          <div className="styling-card-content">

            <h3>AI Stylist</h3>

            <p>
              Your personal AI fashion companion.
              Get outfit inspiration and styling
              recommendations based on your preferences.
            </p>

            <ul>
              <li>Personalized outfit suggestions</li>
              <li>AI-powered style recommendations</li>
              <li>Explore different fashion aesthetics</li>
              <li>Discover your signature look</li>
            </ul>

          </div>

          <button
            className="styling-action"
            onClick={() => navigate("/AIStylist")}
          >
            Explore AI Styling
            <span>→</span>
          </button>

        </article>

        {/* PERSONAL STYLING CARD */}

        <article className="styling-card">

          <div className="styling-card-top">

            <span className="styling-tag">
              ONE-TO-ONE CONSULTATION
            </span>

            <span className="styling-card-icon">
              ◉
            </span>

          </div>

          <div className="styling-card-content">

            <h3>Personal Styling</h3>

            <p>
              Connect with a personal stylist through
              a one-to-one video consultation and
              receive guidance tailored to your needs.
            </p>

            <ul>
              <li>Live video consultation</li>
              <li>Personal outfit guidance</li>
              <li>Fit and colour recommendations</li>
              <li>Wardrobe and occasion styling</li>
            </ul>

          </div>

          <button
            className="styling-action"
            onClick={() => navigate("/PersonalStyling")}
          >
            Book Personal Styling
            <span>→</span>
          </button>

        </article>

      </section>

      {/* FOOTER MESSAGE */}

      <section className="styling-footer">

        <h2>
          Find Your Look.
          <br />
          Define Your Identity.
        </h2>

        <p>
          Wear your confidence.
        </p>

      </section>

    </div>
  );
}


export default Styling;