import { Link, useNavigate } from "react-router-dom";

import { useAuth } from "../context/AuthContext";
import { useCart } from "../context/CartContext";

function Navbar() {
  const navigate = useNavigate();

  const { user, logout } = useAuth();
  const { cartCount } = useCart();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  const isAdmin = user?.role === "admin";

  return (
    <header className="navbar">
      <div className="navbar-inner">

        {/* BRAND */}
        <Link to="/" className="navbar-brand">
          <span className="brand-icon">D</span>
          <span>Mini D-Mart</span>
        </Link>

        {/* NAVIGATION */}
        <nav className="navbar-links">
          <Link to="/">
            Home
          </Link>

          <Link to="/products">
            Products
          </Link>

          {user && (
            <Link to="/orders">
              Orders
            </Link>
          )}

          <Link to="/cart" className="cart-link">
            Cart

            {cartCount > 0 && (
              <span className="cart-badge">
                {cartCount}
              </span>
            )}
          </Link>

          {/* ADMIN DASHBOARD */}
          {isAdmin && (
            <Link
              to="/admin"
              className="admin-nav-link"
            >
              Admin Dashboard
            </Link>
          )}
        </nav>

        {/* RIGHT SIDE */}
        <div className="navbar-actions">

          {user ? (
            <>
              <div className="navbar-user-info">
                <span className="navbar-user">
                  Hi, {user.name}
                </span>

                <span
                  className={`navbar-role ${
                    isAdmin ? "role-admin" : "role-user"
                  }`}
                >
                  {isAdmin ? "ADMIN" : "USER"}
                </span>
              </div>

              <button
                className="nav-logout"
                onClick={handleLogout}
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link
                to="/login"
                className="nav-login"
              >
                Login
              </Link>

              <Link
                to="/register"
                className="btn btn-primary nav-register"
              >
                Get Started
              </Link>
            </>
          )}

        </div>
      </div>
    </header>
  );
}

export default Navbar;