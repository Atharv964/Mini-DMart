import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Products from "./pages/Products";
import Cart from "./pages/Cart";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Orders from "./pages/Orders";
import OrderDetails from "./pages/OrderDetails";
import Admin from "./pages/Admin";
import Home from "./pages/Home";

function App() {
  return (
    <BrowserRouter>

      <div className="app">

        <Navbar />

        <Routes>

            <Route
              path="/"
              element={<Home />}
            />

          <Route
            path="/products"
            element={<Products />}
          />

          <Route
            path="/orders"
            element={<Orders />}
          />

          <Route
            path="/orders/:id"
            element={<OrderDetails />}
          />

          <Route
            path="/cart"
            element={<Cart />}
          />

        <Route
          path="/login"
          element={<Login />}
        />

        <Route
          path="/register"
          element={<Register />}
        />

        <Route
          path="/admin"
          element={<Admin />}
        />

        </Routes>

      </div>

    </BrowserRouter>
  );
}

export default App;