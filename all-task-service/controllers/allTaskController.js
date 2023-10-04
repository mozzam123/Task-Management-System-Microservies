const TaskModel = require("./../../task-service/models/taskModel")

exports.GetAllTaskPage = async (req,res) =>{
    try {
        const tasks = await TaskModel.find().maxTimeMS(2000000);
 // Use lean() to improve query performance
        res.json(tasks);
    } catch (error) {
        console.error('Error fetching tasks:', error);
        res.status(500).json({ error: 'An error occurred while fetching tasks.' });
    }
}