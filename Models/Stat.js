const mongoose = require("mongoose");
const StatSchema = new mongoose.Schema({
  Answer: {
    type: String,
  },
  Counter: {
    type: Number,
    default: 0,
  },
});
module.exports = mongoose.model("statList", StatSchema);
