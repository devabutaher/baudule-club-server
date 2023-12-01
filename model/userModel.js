const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  number: {
    type: String,
  },
  role: {
    type: String,
  },
  totalTrip: {
    type: Number,
  },
});

const User = mongoose.model("User", userSchema);
module.exports = User;
