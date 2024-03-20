const express = require("express");
const userModel = require("../models/userModel.js");

const route = express.Router();

route.post("/adduser", (req, res) => {
  const user = new userModel(req.body);
  user.save();
  res.status(201).json(user);
});

route.get("/userlist", async (req, res) => {
  try {
    const allUsers = await userModel.find();
    res.status(201).json(allUsers);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

route.put("/updateuser/:id", async (req, res) => {
  const editUser = await userModel.findByIdAndUpdate(
    req.params.id,
    { $set: req.body },
    { new: true }
  );
  res.status(201).json(editUser);
});

route.delete("/deleteuser/:id", async (req, res) => {
  const deleteUser = await userModel.findByIdAndDelete(req.params.id);
  res.status(201).json(deleteUser);
});
module.exports = route;
