const app = require("./app")
const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config()

const DB = process.env.DATABASE;

mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('DB connection established'));


// START SERVER
app.listen(7800, () => {
    console.log(`Running on port 7800`);
});