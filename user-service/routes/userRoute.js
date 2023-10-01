const express = require("express");
const router = express.Router();
const userController = require("./../controllers/userController");

router.route("/register").get(userController.GetRegisterUser);
router.route("/register").post(userController.RegisterUser);

module.exports = router;
