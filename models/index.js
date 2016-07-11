var mongoose = require("mongoose");

mongoose.connect( process.env.MONGODB_URI ||
                  process.env.MONGOLAB_COBALT_URI || 
                  localhost://127.0.0.1/flashcards )

// After creating a new model, require and export it:
module.exports.Flashcard = require("./flashcard.js");
