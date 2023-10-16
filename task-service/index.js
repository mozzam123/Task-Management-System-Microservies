const app = require("./app")
const dotenv = require('dotenv');

const PORT = process.env.PORT || 2000
const connectDB = require("./config/database")

// Connect DATABASE
connectDB;


app.listen(PORT, () => {
    console.log(`app listenting on http://localhost:${PORT}/`);
})