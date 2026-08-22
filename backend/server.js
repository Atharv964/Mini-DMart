require("dotenv").config();

const app = require("./app");
const connectDB = require("./config/db");

const PORT = process.env.PORT

connectDB();

app.listen(PORT, () => {
    console.log(`Mini D-Mart server running on port ${PORT}`);
});