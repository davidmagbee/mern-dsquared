const mongoose = require("mongoose");

mongoose.Promise = Promise;

const URI = "mongodb+srv://davidL:Yikapav3!@todo-qrono.mongodb.net/test?retryWrites=true&w=majority";

mongoose
  .connect(mongoURI, { useNewUrlParser: true })
  .then(instance =>
    console.log(`Connected to db: ${instance.connections[0].name}`))
  .catch(error => console.log("Connection failed!", error));

module.exports = mongoose;