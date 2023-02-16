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
  try{
     const user =  await User.findByIdAndUpdate({ _id: req.body._id },{ Answers: req.body.Answers })
     if(user){
      res.status(200).send(user)
     } else {
      res.status(404).send('error')
     }

  }catch(err){
    res.status(500).send('Something went wrong')
  }
  
};

