require("./db/connection");
const express = require("express");
const movieRouter = require("./movies/movieRoutes");
const app = express();
const userRouter = require("./user/userRoutes");
const cors = require("cors");
const port = 5001;

app.use(express.json()); //allows API to parse JSON
app.use(cors());
app.use(userRouter);
app.use(movieRouter);
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
