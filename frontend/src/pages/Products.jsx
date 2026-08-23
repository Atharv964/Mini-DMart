import { useEffect, useState } from "react";

import api from "../services/api";
import ProductCard from "../components/ProductCard";
import { useCart } from "../context/CartContext";

function Products() {

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const { addToCart } = useCart();

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {

    try {

      const response = await api.get("/products");

      setProducts(response.data.products);

    } catch (err) {

      console.error(err);

      setError(
        err.response?.data?.message ||
        "Unable to load products."
      );

    } finally {

      setLoading(false);

    }

  };

  const handleAddToCart = (product) => {

    addToCart(product);

    alert(`${product.name} added to cart!`);

  };

  if (loading) {

    return (
      <main className="page-container loader-container">
        <div className="loader"></div>
      </main>
    );

  }

  return (

    <main className="page-container section">

      <div className="section-header fade-up">

        <p className="section-label">
          Mini D-Mart Store
        </p>

        <h1 className="section-title">
          Everything you need.
        </h1>

        <p className="section-description">
          Browse our collection of everyday essentials
          and add your favorites to your cart.
        </p>

      </div>

      {error && (
        <div className="error-message">
          {error}
        </div>
      )}

      <div className="product-grid">

        {products.map((product) => (

          <ProductCard
            key={product._id}
            product={product}
            onAddToCart={handleAddToCart}
          />

        ))}

      </div>

    </main>

  );
}

export default Products;