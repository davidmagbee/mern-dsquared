const express = require("express");
const parser = require("body-parser");
const cors = require('cors')



const app = express();
app.use(parser.urlencoded({ extended: true }));
app.use(parser.json());
app.use(cors())
const taskController = require("./backend/controllers/task-controller");
const userController = require("./backend/controllers/user-controller");
const auth = require("./backend/controllers/authentication");

//use routes
app.use("/task", taskController);
app.use("/user", userController);
app.use("/auth", auth);

app.get("/", (req, res) => {
  res.redirect("/tasks");
});

app.listen(5000, () =>
  console.log("Yo yo, you're up and running on port 5000!")
);
