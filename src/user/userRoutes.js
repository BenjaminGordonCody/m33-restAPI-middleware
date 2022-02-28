const { Router } = require("express");
const { addUser, giveToken, deleteUser } = require("./userControllers");
const { hashPass, checkPasswordAgainstDB } = require("../middleware");
const userRouter = Router();

userRouter.post("/user", hashPass, addUser);
userRouter.delete("/user", deleteUser);
userRouter.post("/login", checkPasswordAgainstDB, giveToken);

module.exports = userRouter;
