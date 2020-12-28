const Comments = require("./models/Comments");
const Promotions = require("./models/Promotions");
const Leaders = require("./models/Leaders");
const Dishes = require("./models/Dishes");
const express = require("express");
const app = express();
const port = process.env.PORT || 9000;
const mongoose = require("mongoose");
var cors = require("cors");
const Feedback = require("./models/Feedback");
const path = require("path");

//middlewares
app.use(express.json());
app.use(express.static(path.join(__dirname, "client/build")));
app.use(cors());

//database
mongoose
  .connect(
    "mongodb+srv://shreyas4156:4156@cluster0.0kik2.mongodb.net/restaurant?retryWrites=true&w=majority"
  )
  .then(() => console.log("Connected to MongoDB..."))
  .catch((err) => console.error("Could not connect to MongoDB...", err));

//requests and responses
app.get("/dishes", async (req, res) => {
  const dishes = await Dishes.find().sort("name");
  res.json(dishes).status(200);
});

app.get("/comments", async (req, res) => {
  const comments = await Comments.find();
  res.send(comments).status(200);
});

app.get("/leaders", async (req, res) => {
  const leaders = await Leaders.find();
  res.send(leaders).status(200);
});

app.get("/promotions", async (req, res) => {
  const promotions = await Promotions.find();
  res.send(promotions).status(200);
});

app.post("/comments", async (req, res) => {
  let comment = new Comments({
    dishId: req.body.dishId,
    author: req.body.author,
    rating: req.body.rating,
    comment: req.body.comment,
    date: req.body.date,
  });
  const c = await comment.save();
  res.status(200).send(c);
});

app.post("/feedback", async (req, res) => {
  const feedback = new Feedback({
    firstname: req.body.firstname,
    lastname: req.body.lastname,
    telnum: req.body.telnum,
    email: req.body.email,
    agree: req.body.agree,
    contactType: req.body.contactType,
    message: req.body.message,
    date: req.body.date,
  });
  await feedback
    .save()
    .then(res.status(200).send({ message: "Submitted Successfully" }));
});

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "/client/build/index.html"));
});

app.listen(port, () => {
  console.log(`Example app listening at ${port}`);
});
