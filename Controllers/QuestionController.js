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

exports.questionlist = async (req, res) => {
  question.find().then((qlist) => {
    if (!qlist) {
      res.send(error);
      res.status(400);
    } else {
      console.log("this is ", qlist);
      res.status(200).json({ qlist });
    }
  });
};
exports.questionlistlanguage = async (req, res) => {
  question.find({ Language: req.body.Language }).then((qlist) => {
    if (!qlist) {
      res.send(error);
      res.status(400);
    } else {
      console.log("this is ", qlist);
      res.status(200).json({ qlist });
    }
  });
};
