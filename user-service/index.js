const app = require("./app")
const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config()
const PORT = process.env.USERPORT
const DB = process.env.DATABASE;

mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('DB connection established for User Service'));


// START SERVER
app.listen(PORT, () => {
    console.log(`Running on port ${PORT}`);
});