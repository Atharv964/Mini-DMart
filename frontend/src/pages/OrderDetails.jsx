import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import api from "../services/api";

function OrderDetails() {
  const { id } = useParams();

  const [order, setOrder] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetchOrder();
  }, [id]);

  const fetchOrder = async () => {
    try {
      const response = await api.get(`/orders/${id}`);
      setOrder(response.data);
    } catch (err) {
      console.error("ORDER DETAILS ERROR:", err);

      setError(
        err.response?.data?.message ||
          "Unable to load order details."
      );
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <main className="page-container section loader-container">
        <div className="loader"></div>
      </main>
    );
  }

  if (error) {
    return (
      <main className="page-container section">
        <div className="auth-error">
          {error}
        </div>

        <Link to="/orders" className="btn btn-secondary">
          ← Back to Orders
        </Link>
      </main>
    );
  }

  if (!order) {
    return null;
  }

  return (
    <main className="page-container section">
      <div className="section-header fade-up">
        <p className="section-label">
          Order Details
        </p>

        <h1 className="section-title">
          #{order._id.slice(-8).toUpperCase()}
        </h1>

        <p className="section-description">
          Review the details of your order.
        </p>
      </div>

      <div className="glass order-details-card">
        <div className="order-top">
          <div>
            <span className="product-category">
              ORDER STATUS
            </span>

            <h3>
              {order.status}
            </h3>
          </div>

          <span className={`order-status status-${order.status}`}>
            {order.status}
          </span>
        </div>

        <div className="order-info">
          <div>
            <span>Date</span>
            <strong>
              {new Date(
                order.createdAt
              ).toLocaleDateString()}
            </strong>
          </div>

          <div>
            <span>Items</span>
            <strong>
              {order.items.length}
            </strong>
          </div>

          <div>
            <span>Total</span>
            <strong>
              ₹{order.totalPrice}
            </strong>
          </div>
        </div>

        <div className="order-products">
          {order.items.map((item, index) => (
            <div
              className="order-product"
              key={item._id || index}
            >
              <div>
                Product
              </div>

              <span>
                Quantity: {item.quantity}
              </span>
            </div>
          ))}
        </div>

        <div className="summary-total">
          <span>Total Amount</span>

          <strong>
            ₹{order.totalPrice}
          </strong>
        </div>

        <Link
          to="/orders"
          className="btn btn-secondary"
        >
          ← Back to Orders
        </Link>
      </div>
    </main>
  );
}

export default OrderDetails;