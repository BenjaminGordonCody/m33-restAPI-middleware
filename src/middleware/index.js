const bcrypt = require("bcryptjs");

exports.hashPass = async (req, res, next) => {
  console.log(req.body);
  try {
    req.body.password = await bcrypt.hashSync(req.body.password, 8);
    next();
  } catch (error) {
    console.log("hashpass error " + error);
    res.status(500).send({ err: error.message });
  }
};
