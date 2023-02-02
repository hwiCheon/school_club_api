const express = require("express");
const abRequire = require("abrequire");
const cors = require("cors");
const mongoose = require("mongoose");
const { config } = require("dotenv");
const app = express();

const mongooseConnect = abRequire("config/mongoose.js");
const {
  createMemberData,
  fetchMemberData,
} = require("./controller/memberCtrl");

config(process.env);

app.use(cors());
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);

const { PORT, MONGODB_URI } = process.env;

const port = PORT || 3005;
const url = MONGODB_URI || "mongodb://localhost/visitor-app";

mongoose.set("strictQuery", false);
mongooseConnect(url);

app.post("/signup", async (req, res) => {
  console.log(req.body);
  if (await createMemberData(req.body)) {
    res.send(true);
  } else {
    res.status(400).send(false);
  }
});

app.post("/fetch", async (req, res) => {
  res.send(await fetchMemberData());
});

app.listen(port, () => {
  console.log(`server open at ${process.env.PORT}`);
});
