const fitnessModel = require("../models/fitnessModel")
const learnerModel = require("../models/learnerModel")

const fitnessRegistration = async (req, res) => {
  const { name, address, city, mobile, specialization, email, password } = req.body
  try {
    const Fitness = await fitnessModel.create({
      name: name,
      address: address,
      city: city,
      mobile: mobile,
      specialization: specialization,
      email: email,
      password: password
    })
    res.status(201).send({ msg: "Fitness Trainer Successfully Registered" })
  } catch (error) {
    console.log(error)
    res.status(400).send({ msg: "Database not Working" })
  }
}

const fitnessHomeDisplay = async (req, res) => {
  try {
    const Fitness = await fitnessModel.find();
    res.status(200).send(Fitness);
  } catch (error) {
    console.log(error)
    res.status(400).send({ msg: "Error retrieving data" })
  }
}

const fitnessLogin = async (req, res) => {
  const { email, password } = req.body;
  try {
    const Fitness = await fitnessModel.findOne({ email: email });
    if (!Fitness) {
      return res.status(400).send({ msg: "Invalid Email!" })
    }
    if (Fitness.password != password) {
      return res.status(400).send({ msg: "Invalid Credentials!" });
    }
    res.status(200).send(Fitness);
  } catch (error) {
    console.log(error);
    res.status(400).send({ msg: "Error during login" })
  }
}

const fitnessSearch = async (req, res) => {
  const { name, speciality } = req.body;
  try {
    const Fitness = await fitnessModel.find({ $or: [{ "name": name }, { "specialization": speciality }] })
    res.status(200).send(Fitness);
  } catch (error) {
    console.log(error);
    res.status(400).send({ msg: "Error during search" })
  }
}

const learnerList = async (req, res) => {
  const { docid } = req.query;
  try {
    const learner = await learnerModel.find({ docId: docid });

    res.status(200).send(learner);
  } catch (error) {
    console.log(error);
    res.status(400).send({ msg: "Error retrieving learners" });
  }
}

module.exports = {
  fitnessRegistration,
  fitnessHomeDisplay,
  fitnessLogin,
  fitnessSearch,
  learnerList
}
