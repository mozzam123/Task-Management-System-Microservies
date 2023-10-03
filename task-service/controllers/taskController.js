const Task = require("./../models/taskModel")


exports.GetTask = async (req,res) =>{
    res.render("task")
}


exports.CreateTask = async (req,res) =>{
    const task = req.body
    console.log('Task: ',task);
    return res.render("task")
}