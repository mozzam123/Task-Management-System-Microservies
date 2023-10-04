const express = require("express")
const app = express()
const allTaskRoute = require("./routes/allTaskRoute")
const path = require('path')


// Define template path
const template_path = path.join(__dirname, "views");


// Serve static files from public directory
app.use(express.static("public"));

// Set view engine and template path
app.set("view engine", "hbs");
app.set("views", template_path);
app.set("views", path.join(__dirname, "views"));

app.use(allTaskRoute)


module.exports = app