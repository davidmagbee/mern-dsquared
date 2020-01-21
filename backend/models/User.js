const mongoose = require('../db/connection');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    name: {
        firstName: String,
        lastName: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    register_date: {
        type: Date,
        default: Date.now
    },
    tasks: [
        {
            type: Schema.Types.ObjectId,
            ref: "Tasks"
        }
    ]
});

const User = mongoose.model("Users", userSchema);

module.exports = User