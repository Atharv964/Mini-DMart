require("dotenv").config();

const app = require("./app");

const PORT = process.env.PORT

app.listen(PORT, () => {
    console.log(`Mini D-Mart server running on port ${PORT}`);
});