const express = require("express")
const app = express()
const bodyParser = require("body-parser")
const taskroute = require("./routes/taskRoutes")
const path = require("path")
const cors = require('cors'); 


// Allow all origins for simplicity (you may want to restrict this in production)
app.use(cors());

// Use body-parser middleware to parse URL-encoded data
app.use(bodyParser.urlencoded({ extended: true }));

// Define template path
const template_path = path.join(__dirname, "views");


// Serve static files from public directory
app.use(express.static("public"))

// Set view engine and template path
app.set("view engine", "hbs");
app.set("views", template_path);
app.set("views", path.join(__dirname, "views"));

// Routes
app.use(taskroute)


module.exports = app;