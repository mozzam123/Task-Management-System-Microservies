const express = require("express")
const router = express.Router()
const allTaskController = require("./../controllers/allTaskController")


router.route('/all').get(allTaskController.GetAllTaskPage)


module.exports = router