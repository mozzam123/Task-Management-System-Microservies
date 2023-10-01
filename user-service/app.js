const express = require("express");
const app = express();
const userroutes = require("./routes/userRoute");
const path = require("path");
const bodyParser = require("body-parser")


// Use body-parser middleware to parse URL-encoded data
app.use(bodyParser.urlencoded({ extended: true }));


// Define template path
const template_path = path.join(__dirname, "views");


// Serve static files from public directory
app.use(express.static("public"));

// Set view engine and template path
app.set("view engine", "hbs");
app.set("views", template_path);
app.set("views", path.join(__dirname, "views"));

// Routes
app.use(userroutes);

module.exports = app;
