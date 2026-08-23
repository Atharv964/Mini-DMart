import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import api from "../services/api";
import { useAuth } from "../context/AuthContext";
import { useCart } from "../context/CartContext";


function Cart() {
  const {
    cart,
    cartTotal,
    updateQuantity,
    removeFromCart,
    clearCart,
  } = useCart();

    const navigate = useNavigate();

    const { user } = useAuth();

    const [placingOrder, setPlacingOrder] = useState(false);
    const [orderError, setOrderError] = useState("");

    const handleCheckout = async () => {

        if (!user) {
            navigate("/login");
            return;
        }

        setOrderError("");
        setPlacingOrder(true);

        try {

            const items = cart.map((item) => ({
            product: item._id,
            quantity: item.quantity,
            }));

            const response = await api.post("/orders", {
            items,
            });

            console.log("ORDER CREATED:", response.data);

            clearCart();

            navigate("/orders");

        } catch (error) {

            console.error("ORDER ERROR:", error);

            setOrderError(
            error.response?.data?.message ||
            "Unable to place order."
            );

        } finally {

            setPlacingOrder(false);

        }
        };

  if (cart.length === 0) {
    return (
      <main className="page-container section">

        <div className="empty-cart glass fade-up">

          <div className="empty-cart-icon">
            🛒
          </div>

          <p className="section-label">
            Your Shopping Cart
          </p>

          <h1 className="section-title">
            Your cart is empty.
          </h1>

          <p>
            Looks like you haven't added anything yet.
            Let's find something you'll love.
          </p>

          <Link
            to="/products"
            className="btn btn-primary"
          >
            Browse Products →
          </Link>

        </div>

      </main>
    );
  }

  return (
    <main className="page-container section">

      <div className="section-header fade-up">

        <p className="section-label">
          Shopping Cart
        </p>

        <h1 className="section-title">
          Your Cart
        </h1>

        <p className="section-description">
          Review your items before placing your order.
        </p>

      </div>

      <div className="cart-layout">

        {/* CART ITEMS */}

        <div className="cart-items">

          {cart.map((item) => (

            <div
              className="cart-item glass"
              key={item._id}
            >

              <div className="cart-item-image">

                {item.image ? (
                  <img
                    src={item.image}
                    alt={item.name}
                  />
                ) : (
                  <span>🛒</span>
                )}

              </div>

              <div className="cart-item-info">

                <span className="product-category">
                  {item.category || "Product"}
                </span>

                <h3>
                  {item.name}
                </h3>

                <p>
                  ₹{item.price} per item
                </p>

                <div className="quantity-controls">

                  <button
                    onClick={() =>
                      updateQuantity(
                        item._id,
                        item.quantity - 1
                      )
                    }
                  >
                    −
                  </button>

                  <span>
                    {item.quantity}
                  </span>

                  <button
                    onClick={() =>
                      updateQuantity(
                        item._id,
                        item.quantity + 1
                      )
                    }
                  >
                    +
                  </button>

                </div>

              </div>

              <div className="cart-item-right">

                <strong>
                  ₹{item.price * item.quantity}
                </strong>

                <button
                  className="remove-button"
                  onClick={() =>
                    removeFromCart(item._id)
                  }
                >
                  Remove
                </button>

              </div>

            </div>

          ))}

          <button
            className="clear-cart"
            onClick={clearCart}
          >
            Clear Cart
          </button>

        </div>

        {/* SUMMARY */}

        <aside className="cart-summary glass">

          <p className="section-label">
            Order Summary
          </p>

          <h2>
            Checkout
          </h2>

          <div className="summary-row">
            <span>Items</span>
            <span>{cart.length}</span>
          </div>

          <div className="summary-row">
            <span>Subtotal</span>
            <span>₹{cartTotal}</span>
          </div>

          <div className="summary-row">
            <span>Delivery</span>
            <span className="free">
              FREE
            </span>
          </div>

          <div className="summary-divider"></div>

          <div className="summary-total">
            <span>Total</span>
            <strong>
              ₹{cartTotal}
            </strong>
          </div>

          {orderError && (
            <div className="auth-error">
                {orderError}
            </div>
            )}

        <button
        className="btn btn-primary checkout-button"
        onClick={handleCheckout}
        disabled={placingOrder}
        >
        {placingOrder
            ? "Placing Order..."
            : "Place Order →"}
        </button>

        </aside>

      </div>

    </main>
  );
}

export default Cart;