const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();
const UserController = require("./Controllers/UserController.js");
const QuestionController = require("./Controllers/QuestionController.js");
mongoose
  .connect(process.env.REACT_apiKey, {})
  .then(() => console.log("FUCKING conncection to database is ONLINE"))
  .catch((error) => {
    console.log("error did not connect to database  FUCK");
    console.log(error);
  });

const app = express();

app.use(cors({ origin: "http://localhost:3000" }));
app.use(express.json());

//question commands
app.post("/Register", UserController.register);
app.post("/Question", QuestionController.register);
app.get("/QuestionList", QuestionController.questionlist);

app.listen(8000, () => console.log("Listening on port 8000"));
