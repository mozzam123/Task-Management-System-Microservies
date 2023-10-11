const express = require("express")
const router = express.Router()
const taskControllers = require("./../controllers/taskController")

router.route('/').get(taskControllers.GetTask)
router.route('/').post(taskControllers.CreateTask)
router.route('/alls').get(taskControllers.GetAllTask)
router.delete('/delete-task/:taskId', taskControllers.DeleteTask);
router.patch('/update-task/:taskId', taskControllers.UpdateTask);
             



module.exports = router