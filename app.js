const express = require("express");
const mongoose = require("mongoose");

const userRoute = require("./routes/userRoute.js");

const app = express();

app.use(express.json());

const port = 4000;
const url = "mongodb://localhost:27017/demoproject";
app.listen(port, (req, res) => {
  console.log("Server connection established on" + " " + port);
});

mongoose
  .connect(url)
  .then(console.log("db connected succesfully"))
  .catch((err) => {
    console.log("error", err);
  });

app.use("/user", userRoute);
