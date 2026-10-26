
import { useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./app.css";

const API_URL = "http://localhost:5000";

function AdminFashionBlogs() {
  const navigate = useNavigate();

  const [blogs, setBlogs] = useState([]);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const token = sessionStorage.getItem("urbanRajaAdminToken");

    if (!token) {
      navigate("/admin", { replace: true });
      return;
    }

    const fetchBlogs = async () => {
      try {
        const response = await fetch(`${API_URL}/blogs`);
        if (!response.ok) {
          throw new Error("Blogs load nahi ho paaye.");
        }

        const data = await response.json();
        setBlogs(Array.isArray(data) ? data : []);
      } catch (err) {
        setError(
          "Blogs load nahi ho rahe. Check karo ki backend port 5000 par run ho raha hai."
        );
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, [navigate]);

  const categories = useMemo(() => {
    const uniqueCategories = [
      ...new Set(
        blogs.map((blog) => blog.category).filter(Boolean)
      ),
    ];

    return ["All", ...uniqueCategories];
  }, [blogs]);

  const filteredBlogs = useMemo(() => {
    const query = search.trim().toLowerCase();

    return blogs.filter((blog) => {
      const title = String(blog.title || "").toLowerCase();
      const blogCategory = String(blog.category || "").toLowerCase();

      const matchesSearch =
        title.includes(query) || blogCategory.includes(query);

      const matchesCategory =
        category === "All" || blog.category === category;

      return matchesSearch && matchesCategory;
    });
  }, [blogs, search, category]);

  const handleComingSoon = (action) => {
    alert(
      `${action} feature ka backend abhi connect nahi hua hai. Isse next step mein banayenge.`
    );
  };

  return (
    <div className="afb-page">
      <header className="afb-header">
        <div className="afb-brand">
          <button
            className="afb-back-btn"
            onClick={() => navigate("/admin/dashboard")}
            type="button"
          >
            ← Dashboard
          </button>

          <p className="afb-eyebrow">URBAN RAJA STUDIO</p>
          <h1 className="adminfashionblog">Fashion Blogs</h1>
          <p className="afb-subtitle">
            Manage your fashion articles and trends.
          </p>
        </div>

        <button
          className="afb-primary-btn"
          type="button"
          onClick={() => handleComingSoon("Add Blog")}
        >
          + Add New Blog
        </button>
      </header>

      <section className="afb-stats">
        <div className="afb-stat-card">
          <span>Total Articles</span>
          <strong>{blogs.length}</strong>
        </div>

        <div className="afb-stat-card">
          <span>Categories</span>
          <strong>{Math.max(categories.length - 1, 0)}</strong>
        </div>

        <div className="afb-stat-card">
          <span>Search Results</span>
          <strong>{filteredBlogs.length}</strong>
        </div>
      </section>

      <section className="afb-panel">
        <div className="afb-panel-heading">
          <div>
            <h2 className="adminfashionblogall">All Articles</h2>
            <p>Search and manage your published content.</p>
          </div>
        </div>

        <div className="afb-toolbar">
          <div className="afb-search">
            <span aria-hidden="true">⌕</span>
            <input
              type="search"
              placeholder="Search blogs by title or category..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              aria-label="Search blogs"
            />
          </div>

          <select
            className="afb-category-select"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            aria-label="Filter by category"
          >
            {categories.map((item) => (
              <option value={item} key={item}>
                {item === "All" ? "All Categories" : item}
              </option>
            ))}
          </select>
        </div>

        {loading ? (
          <div className="afb-state">
            <div className="afb-spinner" />
            <p>Loading fashion blogs...</p>
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
            <h3>No articles found</h3>
            <p>
              {blogs.length === 0
                ? "Your existing articles will appear here."
                : "Try another search term or category."}
            </p>
            {search || category !== "All" ? (
              <button
                className="afb-secondary-btn"
                type="button"
                onClick={() => {
                  setSearch("");
                  setCategory("All");
                }}
              >
                Clear Filters
              </button>
            ) : null}
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
                                  : `${API_URL}${blog.image.startsWith("/") ? "" : "/"}${blog.image}`
                              }
                              alt={blog.title || "Fashion article"}
                              onError={(e) => {
                                e.currentTarget.style.display = "none";
                              }}
                            />
                          ) : (
                            <span>UR</span>
                          )}
                        </div>

                        <div className="afb-article-info">
                          <strong>{blog.title || "Untitled article"}</strong>
                          <span>Fashion article</span>
                        </div>
                      </div>
                    </td>

                    <td>
                      <span className="afb-category-badge">
                        {blog.category || "Uncategorized"}
                      </span>
                    </td>

                    <td className="afb-id">#{blog.id}</td>

                    <td>
                      <div className="afb-actions">
                        <button
                          type="button"
                          className="afb-action-btn"
                          onClick={() =>
                            handleComingSoon(`Edit Blog #${blog.id}`)
                          }
                        >
                          Edit
                        </button>

                        <button
                          type="button"
                          className="afb-action-btn afb-delete-btn"
                          onClick={() =>
                            handleComingSoon(`Delete Blog #${blog.id}`)
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
            Showing {filteredBlogs.length} of {blogs.length} articles
          </footer>
        )}
      </section>
    </div>
  );
}

export default AdminFashionBlogs;
