const bcrypt = require("bcryptjs");
const { getPasswordHash } = require("../user/userControllers");

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

exports.checkPass = async (req, res, next) => {
  try {
    console.log("checkPass");
    const submittedHash = await bcrypt.hash(req.body.password, 8);
    const storedHash = await getPasswordHash(req.body.username);
    console.log(
      "submitted hash: " + submittedHash,
      "stored hash: " + storedHash
    );

    if (submittedHash == storedHash) {
      console.log("match");
    } else {
      console.log("mismatch");
    }
  } catch (error) {
    console.log(error);
    res.status(500).send({ err: error.message });
  }
};
