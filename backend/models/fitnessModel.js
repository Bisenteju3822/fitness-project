const mongoose = require("mongoose");
const fitnessSchema = new mongoose.Schema({
  name: String,
  address: String,
  city: String,
  mobile: String,
  specialization: String,
  email: String,
  password: String
})

module.exports = mongoose.model("Fitness", fitnessSchema);
