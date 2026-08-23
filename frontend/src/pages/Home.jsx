import { Link } from "react-router-dom";

function Home() {
  return (
    <main className="home-page">

      {/* ================= HERO ================= */}

      <section className="home-hero page-container">

        <div className="hero-content fade-up">

          <p className="section-label">
            Welcome to Mini D-Mart
          </p>

          <h1 className="hero-title">
            Everyday shopping,
            <br />
            <span>made simple.</span>
          </h1>

          <p className="hero-description">
            Shop groceries, beverages, snacks, personal care
            products and everyday essentials — all in one
            convenient place.
          </p>

          <div className="hero-actions">

            <Link
              to="/products"
              className="btn btn-primary"
            >
              Shop Products →
            </Link>

            <Link
              to="/products"
              className="btn btn-secondary"
            >
              Explore Store
            </Link>

          </div>

          <div className="hero-stats">

            <div>
              <strong>30+</strong>
              <span>Products</span>
            </div>

            <div>
              <strong>6+</strong>
              <span>Categories</span>
            </div>

            <div>
              <strong>24/7</strong>
              <span>Shopping</span>
            </div>

          </div>

        </div>


        {/* HERO VISUAL */}

        <div className="hero-visual fade-up">

          <div className="hero-image-card">

            <div className="hero-shopping-icon">
              🛒
            </div>

            <div className="hero-floating-card floating-one">

              <span>🥦</span>

              <div>
                <strong>Fresh Essentials</strong>
                <small>Daily needs</small>
              </div>

            </div>


            <div className="hero-floating-card floating-two">

              <span>✓</span>

              <div>
                <strong>Easy Shopping</strong>
                <small>Simple & secure</small>
              </div>

            </div>

          </div>

        </div>

      </section>


      {/* ================= CATEGORIES ================= */}

      <section className="home-section page-container">

        <div className="section-header">

          <p className="section-label">
            Browse Store
          </p>

          <h2 className="section-title">
            Shop by category.
          </h2>

          <p className="section-description">
            Find exactly what you need from our collection
            of everyday essentials.
          </p>

        </div>


        <div className="category-grid">

          <Link
            to="/products"
            className="category-card glass"
          >
            <span className="category-icon">🛒</span>

            <div>
              <h3>Groceries</h3>
              <p>Everyday food essentials</p>
            </div>

            <span className="category-arrow">
              →
            </span>
          </Link>


          <Link
            to="/products"
            className="category-card glass"
          >
            <span className="category-icon">🥛</span>

            <div>
              <h3>Dairy</h3>
              <p>Milk and dairy products</p>
            </div>

            <span className="category-arrow">
              →
            </span>
          </Link>


          <Link
            to="/products"
            className="category-card glass"
          >
            <span className="category-icon">🥤</span>

            <div>
              <h3>Beverages</h3>
              <p>Refreshing drinks</p>
            </div>

            <span className="category-arrow">
              →
            </span>
          </Link>


          <Link
            to="/products"
            className="category-card glass"
          >
            <span className="category-icon">🍪</span>

            <div>
              <h3>Snacks</h3>
              <p>Tasty quick bites</p>
            </div>

            <span className="category-arrow">
              →
            </span>
          </Link>


          <Link
            to="/products"
            className="category-card glass"
          >
            <span className="category-icon">🧴</span>

            <div>
              <h3>Personal Care</h3>
              <p>Care for every day</p>
            </div>

            <span className="category-arrow">
              →
            </span>
          </Link>


          <Link
            to="/products"
            className="category-card glass"
          >
            <span className="category-icon">🏠</span>

            <div>
              <h3>Household</h3>
              <p>Home care essentials</p>
            </div>

            <span className="category-arrow">
              →
            </span>
          </Link>

        </div>

      </section>


      {/* ================= WHY MINI DMART ================= */}

      <section className="home-section why-section">

        <div className="page-container">

          <div className="section-header">

            <p className="section-label">
              Why Mini D-Mart?
            </p>

            <h2 className="section-title">
              Shopping without the hassle.
            </h2>

          </div>


          <div className="benefits-grid">

            <div className="benefit-card">

              <div className="benefit-icon">
                🛍️
              </div>

              <h3>
                Wide Selection
              </h3>

              <p>
                Find everyday essentials across multiple
                product categories.
              </p>

            </div>


            <div className="benefit-card">

              <div className="benefit-icon">
                🛒
              </div>

              <h3>
                Easy Cart
              </h3>

              <p>
                Add products, adjust quantities and review
                your order before checkout.
              </p>

            </div>


            <div className="benefit-card">

              <div className="benefit-icon">
                📦
              </div>

              <h3>
                Order Tracking
              </h3>

              <p>
                Keep track of your orders and review your
                complete shopping history.
              </p>

            </div>


            <div className="benefit-card">

              <div className="benefit-icon">
                🔐
              </div>

              <h3>
                Secure Access
              </h3>

              <p>
                Protected authentication keeps your account
                and shopping experience secure.
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* ================= FINAL CTA ================= */}

      <section className="home-cta page-container">

        <div className="cta-card glass">

          <div>

            <p className="section-label">
              Ready to shop?
            </p>

            <h2>
              Your everyday essentials
              <br />
              are waiting.
            </h2>

          </div>

          <Link
            to="/products"
            className="btn btn-primary"
          >
            Start Shopping →
          </Link>

        </div>

      </section>

    </main>
  );
}

export default Home;