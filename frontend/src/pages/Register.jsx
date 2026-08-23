import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function Register() {
  const navigate = useNavigate();

  const { register } = useAuth();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    setError("");
    setSuccess("");
    setLoading(true);

    try {
      await register(name, email, password);

      setSuccess(
        "Account created successfully! Redirecting to login..."
      );

      setTimeout(() => {
        navigate("/login");
      }, 1200);

    } catch (err) {

      setError(
        err.response?.data?.message ||
        "Registration failed."
      );

    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="auth-page">

      <div className="auth-background"></div>

      <div className="auth-container">

        <div className="auth-brand">
          <span className="brand-icon">D</span>

          <span>
            Mini D-Mart
          </span>
        </div>

        <div className="auth-card glass fade-up">

          <div className="auth-header">

            <p className="section-label">
              Create Account
            </p>

            <h1>
              Start shopping.
            </h1>

            <p>
              Create your Mini D-Mart account
              in less than a minute.
            </p>

          </div>

          {error && (
            <div className="auth-error">
              {error}
            </div>
          )}

          {success && (
            <div className="auth-success">
              {success}
            </div>
          )}

          <form onSubmit={handleSubmit}>

            <div className="form-group">

              <label>
                Full Name
              </label>

              <input
                type="text"
                placeholder="Your name"
                value={name}
                onChange={(e) =>
                  setName(e.target.value)
                }
                required
              />

            </div>

            <div className="form-group">

              <label>
                Email Address
              </label>

              <input
                type="email"
                placeholder="you@example.com"
                value={email}
                onChange={(e) =>
                  setEmail(e.target.value)
                }
                required
              />

            </div>

            <div className="form-group">

              <label>
                Password
              </label>

              <input
                type="password"
                placeholder="Create a password"
                value={password}
                onChange={(e) =>
                  setPassword(e.target.value)
                }
                required
              />

            </div>

            <button
              type="submit"
              className="btn btn-primary auth-submit"
              disabled={loading}
            >
              {loading
                ? "Creating account..."
                : "Create Account →"}
            </button>

          </form>

          <div className="auth-footer">

            <span>
              Already have an account?
            </span>

            <Link to="/login">
              Sign in
            </Link>

          </div>

        </div>

        <p className="auth-security">
          🔒 Your credentials are securely protected
        </p>

      </div>

    </main>
  );
}

export default Register;