const Stat = require("../Models/Stat");
exports.register = async (req, res) => {
  const { Answer, Counter } = req.body;

  console.log(req.body);

  const newStat = new Stat({ Answer, Counter });
  newStat.save((error, Stat) => {
    if (error) {
      console.log(error);
      res.status(500).send(error);
    } else {
      res.status(200).json({ messege: "Stat added", Stat });
    }
  });
};

exports.updatestat = async (req, res) => {
  Stat.findOneAndUpdate(
    { Answer: req.body.Answer },
    { $inc: { Counter: req.body.num } }
  ).then((stat) => {
    if (!stat) {
      res.send(error);
      res.status(400);
    } else {
      console.log("this is ", stat);
      res.status(200).send(stat);
    }
  });
};

exports.getstats = (req, res) => {
  Stat.find().then((statlist) => {
    if (!statlist) {
      res.send(error);
      res.status(400);
    } else {
      console.log("this is ", statlist);
      res.status(200).send(statlist);
    }
  });
};
