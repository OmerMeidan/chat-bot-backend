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
});
module.exports = mongoose.model("questionList", questioneSchema);
