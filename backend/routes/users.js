const express = require("express");
const router = express.Router();
const User = require("../models/Users");

//gets all the user
router.get("/", async (req, res) => {
  try {
    const user = await User.find();
    res.json(user);
  } catch (err) {
    res.json({ message: err });
  }
});

//submits a user
router.post("/", async (req, res) => {
  const user = new User({
    username: req.body.username,
    password: req.body.password,
  });
  try {
    const savedUser = await user.save();
    res.json(savedUser);
  } catch (err) {
    res.json({ message: err });
  }
});

//login a user
router.post("/login", async (req, res) => {
  try {
    console.log(req.body, "req is this");
    const savedUser = await User.find({ username: req.body.username });
    console.log(savedUser, "saveduser is this");
    if (savedUser.length === 0) console.log("undefined");
    res.json(savedUser);
  } catch (err) {
    res.json({ message: err });
  }
});

//gets a specific user
router.get("/:userId", async (req, res) => {
  try {
    const user = await User.findById(req.params.userId);
    res.json(user);
  } catch (err) {
    res.json({ message: err });
  }
});

//delete a user
router.delete("/:userId", async (req, res) => {
  try {
    const removedUser = await User.remove({ _id: req.params.userId });
    res.json(removedUser);
  } catch (err) {
    res.json({ message: err });
  }
});

//update a user

router.patch("/:userId", async (req, res) => {
  try {
    const updated = await User.updateOne(
      { _id: req.params.userId },
      { $set: { username: req.body.username, password: req.body.password } }
    );
    res.json(updated);
  } catch (err) {
    res.json({ message: err });
  }
});
module.exports = router;
