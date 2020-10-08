const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  owner: { type: Boolean, required: true }
});

const User = mongoose.model("Contact", userSchema);

module.exports = User;
