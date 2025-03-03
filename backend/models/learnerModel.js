const mongoose = require("mongoose");

const workoutSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  goal: {
    type: String,
    required: true
  },
  city: {
    type: String,
    required: true
  },
  mobile: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  docId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Fitness",
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model("learner", workoutSchema);