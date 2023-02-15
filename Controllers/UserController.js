const User = require("../Models/User");
exports.register = async (req, res) => {
  const { Email, Fullname, Phone, City, Gender } = req.body;

  console.log(req.body);

  const newUser = new User({ Email, Fullname, Phone, City, Gender });
  newUser.save((error, user) => {
    if (error) {
      console.log(error);
      res.status(500).send(error);
    } else {
      res.status(200).json({ messege: "User added", user });
    }
  });
};
