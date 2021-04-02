var mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  email: "String",
  password: "String",
  username: "String",
});

module.exports = mongoose.model("user", userSchema);
