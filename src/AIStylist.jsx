import { useState } from "react";

function AIStylist() {
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(null);

  const [analysis, setAnalysis] = useState(null);
  const [loading, setLoading] = useState(false);

  // ==========================================
  // IMAGE SELECT
  // ==========================================

  const handleImageChange = (e) => {
    const file = e.target.files[0];

    if (!file) return;

    // 10MB image limit
    if (file.size > 10 * 1024 * 1024) {
      alert("Image size should be less than 10MB.");
      return;
    }

    // Allowed formats
    const allowedTypes = [
      "image/jpeg",
      "image/jpg",
      "image/png",
    ];

    if (!allowedTypes.includes(file.type)) {
      alert("Only JPG, JPEG and PNG images are allowed.");
      return;
    }

    setImage(file);
    setPreview(URL.createObjectURL(file));

    // Previous analysis remove
    setAnalysis(null);
  };

  // ==========================================
  // ANALYZE OUTFIT
  // ==========================================

  const handleAnalyze = async () => {
    if (!image) {
      alert("Please upload an outfit image first.");
      return;
    }

    try {
      setLoading(true);
      setAnalysis(null);

      // ------------------------------------------
      // IMAGE → BASE64
      // ------------------------------------------

      const reader = new FileReader();

      reader.onloadend = async () => {
        try {
          const base64Image = reader.result;

          // ------------------------------------------
          // SEND IMAGE TO BACKEND
          // ------------------------------------------
          
          console.log("🔥 Calling Urban Raja AI Backend:", "http://localhost:5001/api/analyze-outfit");
          
          const response = await fetch(
            "http://localhost:5001/api/analyze-outfit",
            {
              method: "POST",

              headers: {
                "Content-Type": "application/json",
              },

              body: JSON.stringify({
                imageUrl: base64Image,
              }),
            }
          );

          const data = await response.json();

          // ------------------------------------------
          // BACKEND ERROR
          // ------------------------------------------

          if (!response.ok || !data.success) {
            throw new Error(
              data.message || "Unable to analyze outfit."
            );
          }

          // ------------------------------------------
          // SAVE AI RESULT
          // ------------------------------------------

          setAnalysis(data.data);

        } catch (error) {
          console.error("AI Stylist Error:", error);

          alert(
            error.message ||
              "Something went wrong while analyzing the outfit."
          );
        } finally {
          setLoading(false);
        }
      };

      reader.onerror = () => {
        setLoading(false);
        alert("Unable to read the selected image.");
      };

      reader.readAsDataURL(image);

    } catch (error) {
      console.error("Analyze Error:", error);

      setLoading(false);

      alert(
        error.message ||
          "Something went wrong."
      );
    }
  };

  // ==========================================
  // REMOVE IMAGE
  // ==========================================

  const removeImage = () => {
    setImage(null);
    setPreview(null);
    setAnalysis(null);
  };

  return (
    <div className="ai-stylist-page">

      <div className="ai-stylist-container">

        {/* ==========================================
            HEADER
        ========================================== */}

        <div className="ai-stylist-header">

          <div className="ai-badge">
            ✦ AI POWERED
          </div>

          <h1 className="ai-stylish-header">
            AI <span>Stylist</span>
          </h1>

          <p>
            Upload your outfit and let Urban Raja AI
            analyze your look and suggest personalized
            styling ideas.
          </p>

        </div>


        {/* ==========================================
            UPLOAD / PREVIEW
        ========================================== */}

        <div className="upload-box">

          {!preview ? (

            <div className="upload-content">

              <div className="upload-icon">
                ↑
              </div>

              <h2 className="upload-title">
                Upload Your Outfit
              </h2>

              <p>
                Upload a clear photo of your outfit
              </p>

              <label className="upload-button">

                Choose Image

                <input
                  type="file"
                  accept="image/jpeg,image/jpg,image/png"
                  onChange={handleImageChange}
                  hidden
                />

              </label>

              <span className="upload-info">
                JPG, JPEG or PNG • Max 10MB
              </span>

            </div>

          ) : (

            <div className="preview-section">

              {/* IMAGE */}

              <div className="preview-image-container">

                <img
                  src={preview}
                  alt="Uploaded outfit"
                  className="outfit-preview"
                />

              </div>


              {/* DETAILS */}

              <div className="preview-details">

                <div>

                  <span className="uploaded-label">
                    YOUR OUTFIT
                  </span>

                  <h2>
                    Ready for Analysis
                  </h2>

                  <p>
                    Your image has been uploaded successfully.
                  </p>

                </div>


                {/* ACTIONS */}

                <div className="image-actions">

                  <label className="change-button">

                    Change Image

                    <input
                      type="file"
                      accept="image/jpeg,image/jpg,image/png"
                      onChange={handleImageChange}
                      hidden
                    />

                  </label>


                  <button
                    className="analyze-button"
                    onClick={handleAnalyze}
                    disabled={loading}
                  >

                    {loading
                      ? "✦ Analyzing Outfit..."
                      : "✦ Analyze Outfit"}

                  </button>

                </div>


                <button
                  className="remove-button"
                  onClick={removeImage}
                  disabled={loading}
                >
                  Remove Image
                </button>

              </div>

            </div>

          )}

        </div>


        {/* ==========================================
            AI RESULT
        ========================================== */}

        {analysis && (

          <div className="ai-analysis-result">

            <div className="analysis-header">

              <span className="ai-badge">
                ✦ ANALYSIS COMPLETE
              </span>

              <h2 className="analysis-tittle">
                Your Outfit Analysis
              </h2>

            </div>


            {/* TOP */}

            <div className="analysis-card">

              <h3>Top</h3>

              <p>
                <strong>Type:</strong>{" "}
                {analysis.top?.type || "Unknown"}
              </p>

              <p>
                <strong>Color:</strong>{" "}
                {analysis.top?.color || "Unknown"}
              </p>

              <p>
                <strong>Pattern:</strong>{" "}
                {analysis.top?.pattern || "Unknown"}
              </p>

              <p>
                <strong>Fit:</strong>{" "}
                {analysis.top?.fit || "Unknown"}
              </p>

              <p>
                <strong>Material:</strong>{" "}
                {analysis.top?.material || "Unknown"}
              </p>

            </div>


            {/* BOTTOM */}

            <div className="analysis-card">

              <h3>Bottom</h3>

              <p>
                <strong>Type:</strong>{" "}
                {analysis.bottom?.type || "Unknown"}
              </p>

              <p>
                <strong>Color:</strong>{" "}
                {analysis.bottom?.color || "Unknown"}
              </p>

              <p>
                <strong>Pattern:</strong>{" "}
                {analysis.bottom?.pattern || "Unknown"}
              </p>

              <p>
                <strong>Fit:</strong>{" "}
                {analysis.bottom?.fit || "Unknown"}
              </p>

              <p>
                <strong>Material:</strong>{" "}
                {analysis.bottom?.material || "Unknown"}
              </p>

            </div>


            {/* FOOTWEAR */}

            <div className="analysis-card">

              <h3>Footwear</h3>

              <p>
                <strong>Type:</strong>{" "}
                {analysis.footwear?.type || "Unknown"}
              </p>

              <p>
                <strong>Color:</strong>{" "}
                {analysis.footwear?.color || "Unknown"}
              </p>

              <p>
                <strong>Style:</strong>{" "}
                {analysis.footwear?.style || "Unknown"}
              </p>

            </div>


            {/* ACCESSORIES */}

            <div className="analysis-card">

              <h3>Accessories</h3>

              {analysis.accessories?.length > 0 ? (

                <ul>

                  {analysis.accessories.map(
                    (item, index) => (

                      <li key={index}>
                        {typeof item === "string"
                          ? item
                          : JSON.stringify(item)}
                      </li>

                    )
                  )}

                </ul>

              ) : (

                <p>No visible accessories.</p>

              )}

            </div>


            {/* OUTFIT */}

            <div className="analysis-card">

              <h3>Overall Outfit</h3>

              <p>
                <strong>Style:</strong>{" "}
                {analysis.outfit?.style || "Unknown"}
              </p>

              <p>
                <strong>Occasion:</strong>{" "}
                {analysis.outfit?.occasion || "Unknown"}
              </p>

              <p>
                <strong>Season:</strong>{" "}
                {analysis.outfit?.season || "Unknown"}
              </p>

              <p>
                <strong>Dominant Colors:</strong>{" "}
                {analysis.outfit?.dominantColors?.join(", ") ||
                  "Unknown"}
              </p>

            </div>


            {/* GROOMING */}

            <div className="analysis-card">

              <h3>Grooming</h3>

              <p>
                <strong>Hairstyle:</strong>{" "}
                {analysis.grooming?.hairstyle || "Unknown"}
              </p>

              <p>
                <strong>Beard:</strong>{" "}
                {analysis.grooming?.beard || "Unknown"}
              </p>

              <p>
                <strong>Moustache:</strong>{" "}
                {analysis.grooming?.moustache || "Unknown"}
              </p>

              <p>
                <strong>Sunglasses:</strong>{" "}
                {analysis.grooming?.sunglasses || "Unknown"}
              </p>

            </div>

          </div>

        )}


        {/* ==========================================
            FEATURES
        ========================================== */}

        <div className="ai-features">

          <div className="ai-feature-card">

            <div className="feature-icon">
              ✦
            </div>

            <h3>
              Outfit Analysis
            </h3>

            <p>
              Identify clothes, colors, fits and
              your overall outfit style.
            </p>

          </div>


          <div className="ai-feature-card">

            <div className="feature-icon">
              ◈
            </div>

            <h3>
              Style Suggestions
            </h3>

            <p>
              Get personalized combinations and
              ways to improve your look.
            </p>

          </div>


          <div className="ai-feature-card">

            <div className="feature-icon">
              ◆
            </div>

            <h3>
              Grooming Tips
            </h3>

            <p>
              Get hairstyle, beard and accessory
              suggestions for your outfit.
            </p>

          </div>

        </div>


        {/* ==========================================
            NOTE
        ========================================== */}

        <div className="ai-stylist-note">

          <span>✦</span>

          Urban Raja AI analyzes your uploaded outfit
          to create personalized styling suggestions.

        </div>

      </div>

    </div>
  );
}

export default AIStylist;

