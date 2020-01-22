const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const config = require("config");
const jwt = require("jsonwebtoken");

const User = require("../models/User");
const Task = require("../models/Task");

//request to login
router.post("/", (req, res) => {
  const { email, password } = req.body;

  //this checks if there is a missing email or password
  if (!email || !password) {
    return res.status(400).json({ msg: "please fill out form" });
  }

  //this checks to see if there is already a user with that email
  User.findOne({ email: email }).then(user => {
    if (!user) {
      return res.status(400).json({ msg: "User does not exist" });
    }

    //check for existing user
    User.findOne({ email }).then(user => {
      if (!user)
        return res
          .status(400)
          .json({})
          .json({ msg: "invalid credentials" });
    });

    //validate password
    bcrypt.compare(password, user.password).then(isMatch => {
      if (!isMatch) return res.status(400).json({ msg: "invalid credentials" });
      jwt.sign({ id: user.id }, config.get("jwtSecret"), (err, token) => {
        if (err) throw err;
        res.json({
          token,
          user: {
            id: user.id,
            name: user.name,
            email: user.email
          }
        });
      });
    });
  });
});

module.exports = router;
