const bcrypt = require("bcryptjs");
const { getPasswordHash } = require("../user/userControllers");

exports.hashPass = async (req, res, next) => {
  console.log(req.body);
  try {
    req.body.password = await bcrypt.hash(req.body.password, 8);
    next();
  } catch (error) {
    console.log("hashpass error " + error);
    res.status(500).send({ err: error.message });
  }
};

exports.checkPass = async (req, res, next) => {
  try {
    console.log("checkPass");
    if (
      (await bcrypt.hash(req.body.password, 8)) ==
      (await getPasswordHash(req.body.username))
    ) {
      console.log("match");
    }
  } catch (error) {
    console.log(error);
    res.status(500).send({ err: error.message });
  }
};
