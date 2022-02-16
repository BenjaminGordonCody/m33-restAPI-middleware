const User = require("./userModel");

exports.addUser = async (req, res) => {
  try {
    const newUser = await User.create(req.body);
    res.status(200).send({ user: newUser });
  } catch (error) {
    console.log(error);
    res.status(500).send({ err: error.message });
  }
};

exports.getPasswordHash = async (username) => {
  try {
    console.log("getPasswordHash");
    const user = await User.findOne({ username: username });
    console.log(user);
    if (user.password) {
      return user.password;
    } else {
      return undefined;
    }
  } catch (error) {
    console.log(error);
  }
};

exports.giveToken = async (req, res) => {
  console.log("giveToken");
};
