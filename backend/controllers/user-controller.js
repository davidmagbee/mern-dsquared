const express = require("express")
const router = express.Router()

const User = require("../models/User")
const Task = require("../models/Task")

router.post("/", (req, res) => {
    res.send("register")
})


module.exports = router