const mongoose = require("mongoose");

const Dishes = mongoose.model(
  "dishes",
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
    category: {
      type: String,
      required: true,
    },
    label: {
      type: String,
      required: true,
    },
    price: {
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
module.exports = Dishes;
