//jshint esversion:6

const express = require("express");
const path = require("path");

const app = express();

app.use(express.static("Public"));

app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname + "/index.html"));
});

app.listen(process.env.PORT || 3000, function () {
  console.log("Server is running on port 3000");
});

//Start server with browser-sync
//nodemon app.js & browser-sync start --proxy "localhost:3000" --files "Public"
