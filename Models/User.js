const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
  Fullname: {
    type: String,
  },
  Email: {
    type: String,
    unique: true,
  },
  Phone: {
    type: String,
  },
  City: {
    type: String,
  },
  Gender: {
    type: String,
  },
});
module.exports = mongoose.model("userList", userSchema);
