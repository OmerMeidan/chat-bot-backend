const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const UserController = require("./Controllers/UserController.js");
const QuestionController = require("./Controllers/QuestionController.js");
mongoose
  .connect(
    "mongodb+srv://Markdb:mark1234@cluster0.5bb5gfo.mongodb.net/Bot?retryWrites=true&w=majority",
    {}
  )
  .then(() => console.log("FUCKING conncection to database is ONLINE"))
  .catch((error) => {
    console.log("error did not connect to database  FUCK");
    console.log(error);
  });

const app = express();

app.use(cors({ origin: "http://localhost:3000" }));
app.use(express.json());

//user commands
app.post("/Register", UserController.register);
app.post("/Question", QuestionController.register);
// app.post("/Login", AuthController.Login);

app.listen(8000, () => console.log("Listening on port 8000"));
