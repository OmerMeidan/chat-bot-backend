const User = require("../Models/User");
exports.register = async (req, res) => {
  const { Email, Fullname, Phone, City, Gender, Answers } = req.body;

  console.log(req.body);

  const newUser = new User({ Email, Fullname, Phone, City, Gender, Answers });
  newUser.save((error, user) => {
    if (error) {
      console.log(error);
      res.status(500).send(error);
    } else {
      res.status(200).json({ messege: "User added", user });
    }
  });
};

exports.userList = async (req, res) => {
  User.find().then((userlist) => {
    if (!userlist) {
      res.send(error);
      res.status(400);
    } else {
      console.log("this is ", userlist);
      res.status(200).send(userlist);
    }
  });
};

exports.updateAnswers = async (req, res) => {
  User.findByIdAndUpdate(
    { _id: req.body.id },
    { Answers: req.body.Answers }
  ).then((newarr) => {
    if (!newarr) {
      res.send(error);
      res.status(400);
    } else {
      console.log("this is ", newarr);
      res.status(200).json({ messege: "Updated the Answers!" });
    }
  });
};
