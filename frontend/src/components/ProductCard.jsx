import "../App.css";

function ProductCard({ product, onAddToCart }) {
  return (
    <article className="product-card glass">
      <div className="product-image">
        {product.image ? (
          <img
            src={product.image}
            alt={product.name}
          />
        ) : (
          <span>🛒</span>
        )}
      </div>

      <div className="product-info">
        <span className="product-category">
          {product.category || "Everyday Essential"}
        </span>

        <h3 className="product-title">
          {product.name}
        </h3>

        <p className="product-description">
          {product.description || "Quality product from Mini D-Mart."}
        </p>

        <div className="product-meta">
          <span className="stock">
            {product.stock > 0
              ? `${product.stock} available`
              : "Out of stock"}
          </span>
        </div>

        <div className="product-bottom">
          <strong>₹{product.price}</strong>

          <button
            className="btn btn-primary"
            disabled={product.stock <= 0}
            onClick={() => onAddToCart(product)}
          >
            {product.stock > 0 ? "Add to Cart" : "Sold Out"}
          </button>
        </div>
      </div>
    </article>
  );
}

export default ProductCard;