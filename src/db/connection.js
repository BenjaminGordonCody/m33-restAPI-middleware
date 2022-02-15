require("dotenv").config();
const mongoose = require("mongoose");

const connection = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Connected to db.");
  } catch (error) {
    console.log("Couldn't connect");
    console.log(error);
  }
};

connection();
