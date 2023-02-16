const mongoose = require("mongoose");
const questioneSchema = new mongoose.Schema({
  Question: {
    type: String,
  },
  Answers: {
    type: Array,
  },
  Language: {
    type: String,
  },
  Place: {
    type: Number,
  },
});
module.exports = mongoose.model("questionList", questioneSchema);
