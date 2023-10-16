const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config()
const DB = process.env.DATABASE;


mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('DB connection established for User Service'));