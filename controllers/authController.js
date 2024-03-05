const User = require("../models/User");
const bcrypt = require("bcrypt");

exports.createUser = async (req, res) => {
  try {
    const user = await User.create(req.body);
    res.redirect("/login");
  } catch (error) {
    res.status(400).json({
      status: "fail",
      error,
    });
  }
};

exports.loginUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (user) {
      bcrypt.compare(password, user.password, (err, same) => {
        if (same) {
          // USER SESSION
          req.session.userID = user._id;
          res.status(200).redirect("/users/dashboard");
        } else {
          res.send("Incorrect email or password");
        }
      });
    } 
  } catch (err) {
    res.status(400).json({
      status: "fail",
      error: err.message,
    });
  }
};
exports.logoutUser = (req, res) => {
  req.session.destroy(() => {
    res.redirect("/");
  });
};

exports.getDashboardPage = async (req, res) => {
  const user =await User.findOne({_id:req.session.userID});
  res.status(200).render('dashboard', {
    page_name: 'dashboard',
    user
  });
}; 
