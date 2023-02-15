const question = require("../Models/Question");
exports.register = async (req, res) => {
  const { Question, Answers, Language } = req.body;

  console.log(req.body);

  const newQuestion = new question({ Question, Answers, Language });
  newQuestion.save((error, question) => {
    if (error) {
      console.log(error);
      res.status(500).send(error);
    } else {
      res.status(200).json({ messege: "Question added", question });
    }
  });
};
