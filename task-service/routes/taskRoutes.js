const express = require("express")
const router = express.Router()
const taskControllers = require("./../controllers/taskController")

router.route('/').get(taskControllers.GetTask)
router.route('/').post(taskControllers.CreateTask)
router.route('/alls').get(taskControllers.GetAllTask)




module.exports = router