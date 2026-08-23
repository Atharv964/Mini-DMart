import { useEffect, useState } from "react";
import api from "../services/api";

function Admin() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const [form, setForm] = useState({
    name: "",
    description: "",
    price: "",
    category: "",
    stock: "",
    image: "",
  });

  const fetchProducts = async () => {
    try {
      const response = await api.get("/products");
      setProducts(response.data.products);
    } catch (err) {
      setError(
        err.response?.data?.message ||
          "Unable to load products."
      );
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setMessage("");
    setError("");

    try {
      await api.post("/products", {
        ...form,
        price: Number(form.price),
        stock: Number(form.stock),
      });

      setMessage("Product added successfully.");

      setForm({
        name: "",
        description: "",
        price: "",
        category: "",
        stock: "",
        image: "",
      });

      fetchProducts();
    } catch (err) {
      setError(
        err.response?.data?.message ||
          "Unable to add product."
      );
    }
  };

  const handleDelete = async (id) => {
    const confirmed = window.confirm(
      "Are you sure you want to delete this product?"
    );

    if (!confirmed) return;

    try {
      await api.delete(`/products/${id}`);

      setMessage("Product deleted successfully.");

      setProducts((current) =>
        current.filter((product) => product._id !== id)
      );
    } catch (err) {
      setError(
        err.response?.data?.message ||
          "Unable to delete product."
      );
    }
  };

  if (loading) {
    return (
      <main className="page-container section loader-container">
        <div className="loader"></div>
      </main>
    );
  }

  return (
    <main className="page-container section">
      <div className="section-header fade-up">
        <p className="section-label">
          Administration
        </p>

        <h1 className="section-title">
          Product Management
        </h1>

        <p className="section-description">
          Manage your Mini D-Mart inventory and products.
        </p>
      </div>

      {message && (
        <div className="success-message">
          {message}
        </div>
      )}

      {error && (
        <div className="auth-error">
          {error}
        </div>
      )}

      <div className="admin-layout">
        <section className="admin-form glass">
          <p className="section-label">
            Add Product
          </p>

          <h2>
            New Product
          </h2>

          <form onSubmit={handleSubmit}>
            <input
              name="name"
              placeholder="Product name"
              value={form.name}
              onChange={handleChange}
              required
            />

            <textarea
              name="description"
              placeholder="Product description"
              value={form.description}
              onChange={handleChange}
            />

            <input
              name="category"
              placeholder="Category"
              value={form.category}
              onChange={handleChange}
              required
            />

            <div className="admin-form-row">
              <input
                name="price"
                type="number"
                min="0"
                placeholder="Price"
                value={form.price}
                onChange={handleChange}
                required
              />

              <input
                name="stock"
                type="number"
                min="0"
                placeholder="Stock"
                value={form.stock}
                onChange={handleChange}
                required
              />
            </div>

            <input
              name="image"
              placeholder="Image URL"
              value={form.image}
              onChange={handleChange}
            />

            <button
              type="submit"
              className="btn btn-primary"
            >
              Add Product →
            </button>
          </form>
        </section>

        <section className="admin-products">
          <div className="admin-products-header">
            <div>
              <p className="section-label">
                Inventory
              </p>

              <h2>
                {products.length} Products
              </h2>
            </div>
          </div>

          <div className="admin-product-list">
            {products.map((product) => (
              <article
                className="admin-product glass"
                key={product._id}
              >
                <div className="admin-product-image">
                  {product.image ? (
                    <img
                      src={product.image}
                      alt={product.name}
                    />
                  ) : (
                    <span>🛒</span>
                  )}
                </div>

                <div className="admin-product-info">
                  <span className="product-category">
                    {product.category}
                  </span>

                  <h3>
                    {product.name}
                  </h3>

                  <p>
                    ₹{product.price} ·{" "}
                    {product.stock} in stock
                  </p>
                </div>

                <button
                  className="remove-button"
                  onClick={() =>
                    handleDelete(product._id)
                  }
                >
                  Delete
                </button>
              </article>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}

export default Admin;