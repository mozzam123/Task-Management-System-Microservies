const app = require("./app")
const dotenv = require('dotenv');
dotenv.config()
const PORT = process.env.USERPORT
const connectDB = require("./config/database")

// Connect DB
connectDB;


// START SERVER
app.listen(PORT, () => {
  console.log(`Running on port ${PORT}`);
});