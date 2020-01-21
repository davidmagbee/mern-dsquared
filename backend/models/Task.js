const mongoose = require('../db/connection');
const Schema = mongoose.Schema;

const TaskSchema = new Schema({
    title: String,
    complete: Boolean
});

const Task = mongoose.model("Tasks", TaskSchema);

module.exports = Task;const mongoose = require('../db/connection');