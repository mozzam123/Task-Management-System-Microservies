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
  }
});

// Create a compound index on username and task to ensure uniqueness per user
taskSchema.index({ username: 1, task: 1 }, { unique: true });

// Create the User model
const taskModel = mongoose.model('Task', taskSchema);

module.exports = taskModel;
