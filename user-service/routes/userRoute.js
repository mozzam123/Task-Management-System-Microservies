const express = require("express");
const router = express.Router();
const userController = require("./../controllers/userController");

router.route("/register").get(userController.GetRegisterUser);
router.route("/register").post(userController.RegisterUser);
router.route("/login").get(userController.GetLoginPage);
router.route("/login").post(userController.LoginUser);


module.exports = router;
