const express = require("express");
const route = express.Router();
const learnerController = require("../controllers/learnerController");
route.get("/fitapp", learnerController.trainerDisplay);
route.post("/appntsave", learnerController.learnerSave
);


module.exports = route;