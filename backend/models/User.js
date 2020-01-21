const mongoose = require('../db/connection');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    email: String,
    tasks: [
        {
            type: Schema.Types.ObjectId,
            ref: "Tasks"
        }
    ]
});

const User = mongoose.model("Users", userSchema);

module.exports = User