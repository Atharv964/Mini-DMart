import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import api from "../services/api";

function Orders() {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetchOrders();
  }, []);

  const fetchOrders = async () => {
    try {
      const response = await api.get("/orders/my-orders");
      setOrders(response.data);
    } catch (err) {
      console.error("ORDERS ERROR:", err);

      setError(
        err.response?.data?.message ||
          "Unable to load your orders."
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

  return (
    <main className="page-container section">
      <div className="section-header fade-up">
        <p className="section-label">
          Order History
        </p>

        <h1 className="section-title">
          My Orders
        </h1>

        <p className="section-description">
          Track and review everything you've ordered
          from Mini D-Mart.
        </p>
      </div>

      {error && (
        <div className="auth-error">
          {error}
        </div>
      )}

      {orders.length === 0 && !error ? (
        <div className="empty-cart glass fade-up">
          <div className="empty-cart-icon">
            📦
          </div>

          <p className="section-label">
            No Orders Yet
          </p>

          <h1 className="section-title">
            Your order history is empty.
          </h1>

          <p>
            Once you place an order, it will appear here.
          </p>

          <Link
            to="/products"
            className="btn btn-primary"
          >
            Start Shopping →
          </Link>
        </div>
      ) : (
        <div className="orders-list">
          {orders.map((order) => (
            <article
              className="order-card glass fade-up"
              key={order._id}
            >
              <div className="order-top">
                <div>
                  <span className="product-category">
                    ORDER
                  </span>

                  <h3>
                    #{order._id.slice(-8).toUpperCase()}
                  </h3>
                </div>

                <span
                  className={`order-status status-${order.status}`}
                >
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
                    <span>
                      Product
                    </span>

                    <span>
                      × {item.quantity}
                    </span>
                  </div>
                ))}
              </div>

              <div className="order-card-footer">
                <span className="order-total-label">
                  Order Total
                </span>

                <strong>
                  ₹{order.totalPrice}
                </strong>

                <Link
                  to={`/orders/${order._id}`}
                  className="btn btn-secondary"
                >
                  View Order →
                </Link>
              </div>
            </article>
          ))}
        </div>
      )}
    </main>
  );
}

export default Orders;