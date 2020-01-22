const mongoose = require("../db/connection");
const Schema = mongoose.Schema;

const TaskSchema = new Schema({
  title: String,
  complete: Boolean,
  user: {
    type: Schema.Types.ObjectId,
    ref: "Users"
  }
});

const Task = mongoose.model("Tasks", TaskSchema);

module.exports = Task;
