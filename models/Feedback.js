const mongoose = require("mongoose");

const Feedback = mongoose.model(
  "feedbacks",
  new mongoose.Schema({
    id: {
      type: Number,
    },
    firstname: {
      type: String,
      required: true,
    },
    lastname: {
      type: String,
      required: true,
    },
    telnum: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    contactType: {
      type: String,
      required: true,
    },
    message: {
      type: String,
    },
    date: {
      type: String,
      required: true,
    },
    agree: {
      type: Boolean,
    },
  })
);
module.exports = Feedback;
