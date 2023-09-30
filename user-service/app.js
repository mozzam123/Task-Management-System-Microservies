const express = require("express");
const app = express();
const userroutes = require("./routes/userRoute");

app.use("/", userroutes);
module.exports = app;
