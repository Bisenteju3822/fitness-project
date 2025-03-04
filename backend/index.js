const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require('body-parser');
const mongoose = require("mongoose");
const fitnessRoute = require("./routes/fitnessRoute");
const learnerRoute = require("./routes/learnerRoute");
require("dotenv").config();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

mongoose.connect(process.env.DBCONN, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  ssl: true,
}).then(() => {
  console.log("DB connected!!!");
}).catch((err) => {
  console.error("DB connection error: ", err);
});

app.use("/fitness", fitnessRoute);
app.use("/learner", learnerRoute);

const Port = process.env.PORT || 8080;
app.listen(Port, () => {
  console.log(`Server running on port ${Port}`);
});
