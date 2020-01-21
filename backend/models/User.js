const mongoose = require('../db/connection');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    email: String,
    tasks: [
        {
            type: Schema.Types.ObjectId,
            ref: "Tasks"
        }
    ]
});

const User = mongoose.model("Users", UserSchema);

module.exports = User