exports.GetRegisterUser = (req, res) => {
  res.render("registration");
};

exports.RegisterUser = async (req, res) => {
  try {
    console.log(req.body);
    console.log("ran the post thing first*******************");
    res.redirect("http://127.0.0.1:8000/register");
  } catch (error) {
    console.log(error);
  }
};
