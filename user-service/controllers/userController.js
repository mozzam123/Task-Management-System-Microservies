const userModel = require("./../models/userModel");

exports.GetRegisterUser = (req, res) => {
  res.render("registration");
};

exports.RegisterUser = async (req, res) => {
  try {
    const username = req.body.username;
    const existingUser = await userModel.findOne({username: username});
    const alreadyEmail = await userModel.findOne({email: req.body.email})
    if (existingUser || alreadyEmail) {
      res.render("registration", { message: "Username or email already exists" });
    } else {
      const userData = new userModel({
        username: username,
        email: req.body.email,
        password: req.body.password,
      });

      const savedData = await userData.save();
      console.log(
        `New user saved with usename: ${savedData.username} and password: ${savedData.password}`
      );
      res.render("login");
    }
  } catch (error) {
    console.log("*****errors*****", error);
    res.render("registration", { error: error.message });
  }
};


exports.GetLoginPage = async (req,res) =>{
  res.render("login")
}