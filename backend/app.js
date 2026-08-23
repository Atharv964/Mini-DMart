const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.use(express.json());


const userRoutes = require("./routes/userRoutes");
const productRoutes = require("./routes/productRoutes");
const orderRoutes = require("./routes/orderRoutes");

app.use("/api/users", userRoutes);
app.use("/api/products", productRoutes);
app.use("/api/orders", orderRoutes);

app.get("/", (req, res) => {
    res.send("Mini D-Mart API ");
});

module.exports = app;