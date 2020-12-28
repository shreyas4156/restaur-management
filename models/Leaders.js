const mongoose = require("mongoose");

const Leaders = mongoose.model(
  "leaders",
  new mongoose.Schema({
    id: {
      type: Number,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    designation: {
      type: String,
      required: true,
    },
    abbr: {
      type: String,
      required: true,
    },
    featured: {
      type: Boolean,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
  })
);
module.exports = Leaders;
