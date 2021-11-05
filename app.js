//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const favicon = require("serve-favicon");
const fs = require("fs");
const { listenerCount } = require("process");

const app = express();

app.use(express.static("Public"));

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname + "/index.html"));
});

app.listen(process.env.PORT || 3000, function () {
  console.log("Server is running on port 3000");
});

//Start server with browser-sync
//nodemon app.js & browser-sync start --proxy "localhost:3000" --files "Public"