const express = require("express")
const router = express.Router()

// const User = require("../models/User")
const Task = require("../models/Task")

router.get("/", (req, res) => {
    Task.find().then(tasks => res.json(tasks))
})

router.post("/", (req, res) => {
    // User.find({ _id: req.body.user._id }).then(user => {
        Task.create(req.body.task.title).then(task => {
            // user[0].tasks.push(task._id)
            // task.user = user._id

            // user[0].save()
            task.save()

            res.json(task)
        })
    })
// })

router.put("/", (req, res) => {
    User.find({ _id: req.body.user._id }).then(user => {
        Task.findOneAndUpdate({ _id: req.body.task._id }, req.body.task, { new: true }).then(task => {
            user[0].save()
            task.save()

            res.json(user)
        })
    })
})

router.delete("/", (req, res) => {
    Task.findOneAndDelete({ _id: req.body.user._id }).then(task => res.json(task))
})

module.exports = router