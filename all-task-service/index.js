const mongoose = require('mongoose');
const app = require('./app')
require("dotenv").config()
const TaskModel = require("./../task-service/models/taskModel")
const DB = process.env.DATABASE
const PORT = process.env.PORT || 3000


mongoose
    .connect(DB, {
    })
    .then(() => console.log('DB connection established for All Task service'));


app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
})

