const mongoose = require('mongoose');

// Define the user schema
const taskSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },

  task: {
    type: String,
    required: true,
    unique: true
  }
});

// Create the User model
const taskModel = mongoose.model('Task', taskSchema);

module.exports = taskModel;
