const mongoose = require("mongoose");
const config = require("config");
const jwt = require("jsonwebtoken");

mongoose.Promise = Promise;

const db = config.get("mongoURI");
// const mongoURI = "mongodb+srv://davidL:david123@todo-qrono.mongodb.net/test?retryWrites=true&w=majority";

mongoose
  .connect(db, { useNewUrlParser: true })
  .then(instance =>
    console.log(`Connected to db: ${instance.connections[0].name}`))
  .catch(error => console.log("Connection failed!", error));

module.exports = mongoose;
