
import { NavLink, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import "./app.css";

function AdminDashboard() {
  const navigate = useNavigate();

  const handleLogout = () => {
    sessionStorage.removeItem("urbanRajaAdminToken");
    navigate("/admin", { replace: true });
  };

  useEffect(() => {
  const token = sessionStorage.getItem("urbanRajaAdminToken");

  if (!token) {
    navigate("/admin", { replace: true });
  }
}, [navigate]);

  return (
    <div className="admin-dashboard">
      <header className="admin-dashboard-header">
        <div>
          <h1>Urban Raja Studio</h1>
          <p>Admin Dashboard</p>
        </div>

        <button onClick={handleLogout}>Logout</button>
      </header>

      <main className="admin-dashboard-content">
        <h2 className="admin-dashboard-head">Welcome, Admin 👋</h2>
        <p>Manage your website from one place.</p>

        <div className="admin-dashboard-grid">
            <NavLink className="admin-dashboard-link" to="/admin/fashion-blogs">
          <div className="admin-dashboard-card">
            <h3>Fashion Blogs</h3>
            <p>Manage fashion articles and trends.</p>
          </div>
          </NavLink>

           <NavLink className="admin-dashboard-link" to="/admin/style-guides">
          <div className="admin-dashboard-card">
            <h3>Style Guide</h3>
            <p>Manage style guides and their content.</p>
          </div>
          </NavLink>

           <NavLink className="admin-dashboard-link" to="/admin/grooming">
          <div className="admin-dashboard-card">
            <h3>Grooming</h3>
            <p>Manage grooming articles and tips.</p>
          </div>
          </NavLink>
          
           <NavLink className="admin-dashboard-link" to="/admin/seasonal-content">
          <div className="admin-dashboard-card">
            <h3>Seasonal Content</h3>
            <p>Manage seasonal fashion articles.</p>
          </div>
          </NavLink>

        </div>
      </main>
    </div>
  );
}

export default AdminDashboard;
