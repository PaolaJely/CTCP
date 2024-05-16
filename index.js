const express = require("express");
const morgan = require("morgan");
const app = express();

const port = process.env.PORT || 5000;

app.use(morgan("dev"));

app.get("/ping", (req, res) => {
  res.status(200).send("pong");
});

app.listen(port, () => {
  console.log("> Server is up and running on port : " + port);
});
