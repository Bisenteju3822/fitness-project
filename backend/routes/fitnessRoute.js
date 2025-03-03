const express = require("express");
const route = express.Router();
const fitnessController = require("../controllers/fitnessController");

route.post("/registration", fitnessController.fitnessRegistration);
route.get("/display", fitnessController.fitnessHomeDisplay);
route.post("/login", fitnessController.fitnessLogin);
route.post("/search", fitnessController.fitnessSearch);
route.get("/learnerlist", fitnessController.learnerList);



module.exports = route;