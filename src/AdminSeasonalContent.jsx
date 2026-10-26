
import { useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./app.css";

const API_URL = "http://localhost:5000";

function AdminSeasonalContent() {
  const navigate = useNavigate();

  const [blogs, setBlogs] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const token = sessionStorage.getItem("urbanRajaAdminToken");

    if (!token) {
      navigate("/admin", { replace: true });
      return;
    }

    const fetchSeasonalBlogs = async () => {
      try {
        const response = await fetch(
          `${API_URL}/blogs/category/Seasonal`
        );

        if (!response.ok) {
          throw new Error("Seasonal content load nahi ho paaya.");
        }

        const data = await response.json();
        setBlogs(Array.isArray(data) ? data : []);
      } catch (err) {
        setError(
          "Seasonal content load nahi ho raha. Backend aur API route check karo."
        );
      } finally {
        setLoading(false);
      }
    };

    fetchSeasonalBlogs();
  }, [navigate]);

  const filteredBlogs = useMemo(() => {
    const query = search.trim().toLowerCase();

    return blogs.filter((blog) =>
      String(blog.title || "").toLowerCase().includes(query)
    );
  }, [blogs, search]);

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
          <h1 className="adminfashionblog">Seasonal Content</h1>
          <p className="afb-subtitle">
            Manage summer, monsoon, winter, festive and wedding outfit guides.
          </p>
        </div>

        <button
          className="afb-primary-btn"
          type="button"
          onClick={() => handleComingSoon("Add Seasonal Article")}
        >
          + Add Seasonal Article
        </button>
      </header>

      <section className="afb-stats">
        <div className="afb-stat-card">
          <span>Total Seasonal Articles</span>
          <strong>{blogs.length}</strong>
        </div>

        <div className="afb-stat-card">
          <span>Search Results</span>
          <strong>{filteredBlogs.length}</strong>
        </div>
      </section>

      <section className="afb-panel">
        <div className="afb-panel-heading">
          <div>
            <h2 className="adminfashionblogall">
              All Seasonal Articles
            </h2>
            <p>Search and manage your seasonal fashion content.</p>
          </div>
        </div>

        <div className="afb-toolbar">
          <div className="afb-search">
            <span aria-hidden="true">⌕</span>
            <input
              type="search"
              placeholder="Search seasonal articles..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              aria-label="Search seasonal articles"
            />
          </div>
        </div>

        {loading ? (
          <div className="afb-state">
            <div className="afb-spinner" />
            <p>Loading seasonal articles...</p>
          </div>
        ) : error ? (
          <div className="afb-state afb-error">
            <h3>Unable to load articles</h3>
            <p>{error}</p>
            <button
              className="afb-secondary-btn"
              type="button"
              onClick={() => window.location.reload()}
            >
              Try Again
            </button>
          </div>
        ) : filteredBlogs.length === 0 ? (
          <div className="afb-state">
            <span className="afb-empty-icon">✦</span>
            <h3>No seasonal articles found</h3>
            <p>
              {blogs.length === 0
                ? "Seasonal articles will appear here when available."
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
                  <th>Article</th>
                  <th>Category</th>
                  <th>Article ID</th>
                  <th>Actions</th>
                </tr>
              </thead>

              <tbody>
                {filteredBlogs.map((blog) => (
                  <tr key={blog.id}>
                    <td>
                      <div className="afb-article">
                        <div className="afb-article-image">
                          {blog.image ? (
                            <img
                              src={
                                blog.image.startsWith("http")
                                  ? blog.image
                                  : `${API_URL}${
                                      blog.image.startsWith("/")
                                        ? ""
                                        : "/"
                                    }${blog.image}`
                              }
                              alt={blog.title || "Seasonal article"}
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
                            {blog.title || "Untitled article"}
                          </strong>
                          <span>Seasonal Fashion Guide</span>
                        </div>
                      </div>
                    </td>

                    <td>
                      <span className="afb-category-badge">
                        {blog.category || "Seasonal"}
                      </span>
                    </td>

                    <td className="afb-id">#{blog.id}</td>

                    <td>
                      <div className="afb-actions">
                        <button
                          type="button"
                          className="afb-action-btn"
                          onClick={() =>
                            handleComingSoon(
                              `Edit Seasonal Article #${blog.id}`
                            )
                          }
                        >
                          Edit
                        </button>

                        <button
                          type="button"
                          className="afb-action-btn afb-delete-btn"
                          onClick={() =>
                            handleComingSoon(
                              `Delete Seasonal Article #${blog.id}`
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

        {!loading && !error && blogs.length > 0 && (
          <footer className="afb-footer">
            Showing {filteredBlogs.length} of {blogs.length} seasonal articles
          </footer>
        )}
      </section>
    </div>
  );
}

export default AdminSeasonalContent;
