const { Router } = require("express");
const { addUser, giveToken } = require("./userControllers");
const { hashPass, checkPasswordAgainstDB } = require("../middleware");
const userRouter = Router();

userRouter.post("/user", hashPass, addUser);
userRouter.post("/login", checkPasswordAgainstDB, giveToken);

module.exports = userRouter;
