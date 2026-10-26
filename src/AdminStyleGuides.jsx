
import { useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./app.css";

const API_URL = "http://localhost:5000";

function AdminStyleGuides() {
  const navigate = useNavigate();

  const [guides, setGuides] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const token = sessionStorage.getItem("urbanRajaAdminToken");

    if (!token) {
      navigate("/admin", { replace: true });
      return;
    }

    const fetchGuides = async () => {
      try {
        const response = await fetch(`${API_URL}/style-guides`);

        if (!response.ok) {
          throw new Error("Style Guides load nahi ho paaye.");
        }

        const data = await response.json();
        setGuides(Array.isArray(data) ? data : []);
      } catch (err) {
        setError(
          "Style Guides load nahi ho rahe. Backend API aur route check karo."
        );
      } finally {
        setLoading(false);
      }
    };

    fetchGuides();
  }, [navigate]);

  const filteredGuides = useMemo(() => {
    const query = search.trim().toLowerCase();

    return guides.filter((guide) => {
      const title = String(guide.title || "").toLowerCase();
      const category = String(guide.category || "").toLowerCase();

      return title.includes(query) || category.includes(query);
    });
  }, [guides, search]);

  const handleComingSoon = (action) => {
    alert(
      `${action} functionality agle step mein backend ke saath connect karenge.`
    );
  };

  return (
    <div className="afb-page">
      <header className="afb-header">
        <div className="afb-brand">
          <button
            className="afb-back-btn"
            type="button"
            onClick={() => navigate("/admin/dashboard")}
          >
            ← Dashboard
          </button>

          <p className="afb-eyebrow">URBAN RAJA STUDIO</p>
          <h1 className="adminfashionblog">Style Guide</h1>
          <p className="afb-subtitle">
            Manage your style guides and styling advice.
          </p>
        </div>

        <button
          className="afb-primary-btn"
          type="button"
          onClick={() => handleComingSoon("Add Style Guide")}
        >
          + Add Style Guide
        </button>
      </header>

      <section className="afb-stats">
        <div className="afb-stat-card">
          <span>Total Style Guides</span>
          <strong>{guides.length}</strong>
        </div>

        <div className="afb-stat-card">
          <span>Search Results</span>
          <strong>{filteredGuides.length}</strong>
        </div>
      </section>

      <section className="afb-panel">
        <div className="afb-panel-heading">
          <div>
            <h2 className="adminfashionblogall">All Style Guides</h2>
            <p>Search and manage your styling content.</p>
          </div>
        </div>

        <div className="afb-toolbar">
          <div className="afb-search">
            <span aria-hidden="true">⌕</span>
            <input
              type="search"
              placeholder="Search style guides..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              aria-label="Search style guides"
            />
          </div>
        </div>

        {loading ? (
          <div className="afb-state">
            <div className="afb-spinner" />
            <p>Loading style guides...</p>
          </div>
        ) : error ? (
          <div className="afb-state afb-error">
            <h3>Unable to load Style Guides</h3>
            <p>{error}</p>
            <button
              className="afb-secondary-btn"
              type="button"
              onClick={() => window.location.reload()}
            >
              Try Again
            </button>
          </div>
        ) : filteredGuides.length === 0 ? (
          <div className="afb-state">
            <span className="afb-empty-icon">✦</span>
            <h3>No Style Guides found</h3>
            <p>
              {guides.length === 0
                ? "Your existing Style Guides will appear here."
                : "Try another search term."}
            </p>
            {search && (
              <button
                className="afb-secondary-btn"
                type="button"
                onClick={() => setSearch("")}
              >
                Clear Search
              </button>
            )}
          </div>
        ) : (
          <div className="afb-table-wrap">
            <table className="afb-table">
              <thead>
                <tr>
                  <th>Style Guide</th>
                  <th>Category</th>
                  <th>Guide ID</th>
                  <th>Actions</th>
                </tr>
              </thead>

              <tbody>
                {filteredGuides.map((guide) => (
                  <tr key={guide.id}>
                    <td>
                      <div className="afb-article">
                        <div className="afb-article-image">
                          {guide.image ? (
                            <img    
                              src={
                               guide.image.startsWith("http")
                                ? guide.image
                                  : `${API_URL}/images/${guide.image.split("/").pop()}`
                                 }
                              alt={guide.title || "Style Guide"}
                              onError={(e) => {
                                e.currentTarget.style.display = "none";
                              }}
                            />
                          ) : (
                            <span>UR</span>
                          )}
                        </div>

                        <div className="afb-article-info">
                          <strong>
                            {guide.title || "Untitled Style Guide"}
                          </strong>
                          <span>Style Guide</span>
                        </div>
                      </div>
                    </td>

                    <td>
                      <span className="afb-category-badge">
                        {guide.category || "Uncategorized"}
                      </span>
                    </td>

                    <td className="afb-id">#{guide.id}</td>

                    <td>
                      <div className="afb-actions">
                        <button
                          type="button"
                          className="afb-action-btn"
                          onClick={() =>
                            handleComingSoon(`Edit Style Guide #${guide.id}`)
                          }
                        >
                          Edit
                        </button>

                        <button
                          type="button"
                          className="afb-action-btn afb-delete-btn"
                          onClick={() =>
                            handleComingSoon(
                              `Delete Style Guide #${guide.id}`
                            )
                          }
                        >
                          Delete
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {!loading && !error && guides.length > 0 && (
          <footer className="afb-footer">
            Showing {filteredGuides.length} of {guides.length} Style Guides
          </footer>
        )}
      </section>
    </div>
  );
}

export default AdminStyleGuides;
