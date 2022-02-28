const bcrypt = require("bcryptjs");
const { getStoredHash } = require("../user/userControllers");

exports.hashPass = async (req, res, next) => {
  console.log("hashpass", req.body);
  try {
    req.body.password = await bcrypt.hash(req.body.password, 8);
    next();
  } catch (error) {
    console.log("hashpass error " + error);
    res.status(500).send({ err: error.message });
  }
};

exports.checkPasswordAgainstDB = async (req, res, next) => {
  try {
    if (
      await bcrypt.compare(
        req.body.password,
        await getStoredHash(req.body.username)
      )
    ) {
      console.log("password matches hash");
      next();
    } else {
      throw Error("Submitted password doesn't match stored hash");
    }
  } catch (error) {
    console.log(error.message);
    res.status(500).send({ err: error.message });
  }
};
