// SERVER-SIDE JAVASCRIPT

// REQUIREMENTS //
var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var mongoose = require("mongoose");
var where = require("./utils/where");
var db = require("./models/index");
// var port = process.env.PORT || 3000;
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

var allowCrossDomain = function(req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');
    res.setHeader('Access-Control-Allow-Credentials', true);
    // intercept OPTIONS method
    if ('OPTIONS' == req.method) {
      res.send(200);
    }
    else {
      next();
    }
};

app.use(allowCrossDomain);

// serve the public folder as static assets
app.use("/static", express.static("./public"));
// alias the views folder
app.set("view engine", "ejs");
app.set("port", process.env.PORT || 3000);
// ROUTES //
var routes = require("./routes");

app.get('/', function(req, res) {
  res.render("index");
});

app.use('/api/flashcards', routes.flashcardRouter);

// app.listen(app.get("port"), function() {
//     process.on('uncaughtException', function (err) {
//         console.log(err);
//     }); 
//   console.log("Express server listening on port %d in %s mode", app.get("port"), app.settings.env);
// });

app.listen(process.env.PORT || 5000);
