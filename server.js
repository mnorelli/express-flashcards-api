// SERVER-SIDE JAVASCRIPT

// REQUIREMENTS //
var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var mongoose = require("mongoose");
// var where = require("./utils/where");
// var db = require("./models/index");

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());


// serve the public folder as static assets
app.use("/static", express.static("./public"));
// alias the views folder
app.set("view engine", "ejs");

// ROUTES //
var routes = require("./routes");

app.get('/', function(req, res) {
  res.render("index");
});

app.use('/api/flashcards', routes.flashcardRouter);

app.listen(process.env.PORT || 3000, function() {
  console.log("express-heroku-starter is running on port 3000");
});

