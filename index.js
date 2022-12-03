//Requiring the express library
const express = require("express");
//creating an instance of express
let app = express();
//enabling the viewing of EJS files
app.set("view engine", "ejs");
//Enabling post route variables
app.use(express.urlencoded({ extended: true }));
//Allowing CSS to be used
app.use(express.static(__dirname + "/public"));

let path = require("path");

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/vote", (req, res) => {
  res.render("vote");
});

app.get("/congrats", (req, res) => {
  res.render("congrats");
});

app.listen(3000, () => console.log(`App available on http://localhost:3000`));
