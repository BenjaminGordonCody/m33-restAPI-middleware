const { Router } = require("express");
const { addUser, giveToken } = require("./userControllers");
const { hashPass, checkPass } = require("../middleware");
const userRouter = Router();

userRouter.post("/user", hashPass, addUser);
userRouter.post("/login", checkPass, giveToken);

module.exports = userRouter;
