const express = require("express");

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
    res.send("Mini D-Mart API ");
});

module.exports = app;