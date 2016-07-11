var mongoose = require("mongoose");

mongoose.connect( process.env.MONGOLAB_URI ||
                  process.env.MONGOLAB_COBALT_URI || 
                  mongodb://heroku_b7gd64bq:16i5q92o9blpipa2h9b8152l1h@ds027628.mlab.com:27628/heroku_b7gd64bq )

// After creating a new model, require and export it:
module.exports.Flashcard = require("./flashcard.js");
