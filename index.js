const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();
const UserController = require("./Controllers/UserController.js");
const QuestionController = require("./Controllers/QuestionController.js");
const StatController = require("./Controllers/StatController");
mongoose
  .connect(process.env.REACT_apiKey, {})
  .then(() => console.log("conncection to database is ONLINE"))
  .catch((error) => {
    console.log("error did not connect to database");
    console.log(error);
  });

const app = express();

app.use(cors({ origin: "http://localhost:3000" }));
app.use(express.json());

//register user
app.post("/Register", UserController.register);
//get userlist
app.get("/UserList", UserController.userList);
//addone question
app.post("/Question", QuestionController.register);
//get all
app.get("/QuestionList", QuestionController.questionlist);
//get by language
app.get("/QuestionListLanguage", QuestionController.questionlistlanguage);
//
app.post("/UpdateAnswers", UserController.updateAnswers);

app.post("/Stat", StatController.register);
app.post("/UpdateCounter", StatController.updatestat);
app.get("/Getallstats", StatController.getstats);

app.listen(8000, () => console.log("Listening on port 8000"));
