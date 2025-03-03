const fitnessModel = require("../models/fitnessModel");
const learnerModel = require("../models/learnerModel");

const trainerDisplay = async (req, res) => {
  const { id } = req.query;
  try {
    const Trainer = await fitnessModel.findById(id);
    res.status(200).send({ msg: "Successfully displayed" });
    console.log(Trainer);

  } catch (error) {
    console.log("Error in trainerDisplay:", error);
    res.status(400).send({ msg: "Error retrieving trainer data", error: error.message });
  }
};

const learnerSave = async (req, res) => {
  const { name, goal, city, mobile, email, date, docid } = req.body;
  try {
    const appointment = await learnerModel.create({
      name: name,
      goal: goal,
      city: city,
      mobile: mobile,
      email: email,
      date: date,
      docId: docid
    });
    res.status(200).send({ msg: "Appointment successfully booked!" });
  } catch (error) {
    console.log("Error in learnerSave:", error);
    res.status(400).send({ msg: "Error saving appointment data", error: error.message });
  }
};

module.exports = {
  trainerDisplay,
  learnerSave
};
