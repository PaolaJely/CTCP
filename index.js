const express = require("express");
const app = express();

const path = require("path");
const morgan = require("morgan");

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "src", "views"));

const port = process.env.PORT || 5000;

// middlewares
app.use(morgan("dev"));

// routes
app.get("/", (req, res) => {
  res.status(200).render("index");
});

app.get("/ping", (req, res) => {
  res.status(200).send("pong");
});

app.listen(port, () => {
  console.log("> Server is up and running on port : " + port);
});
