const mongoose = require("mongoose");

const Comments = mongoose.model(
  "comments",
  new mongoose.Schema({
    id: {
      type: Number,
    },
    dishId: {
      type: Number,
      required: true,
    },
    rating: {
      type: Number,
      required: true,
    },
    comment: {
      type: String,
      required: true,
    },
    author: {
      type: String,
      required: true,
    },
    date: {
      type: String,
      required: true,
    },
  })
);
module.exports = Comments;
