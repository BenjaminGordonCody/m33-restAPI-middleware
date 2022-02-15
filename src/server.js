require("./db/connection");
const express = require("express");
const app = express();
const port = 5001;

app.use(express.json); //allows API to parse JSON
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
