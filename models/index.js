var mongoose = require("mongoose");

mongoose.connect(process.env.MONGOLAB_URI || 
    process.env.MONGOHQ_URI || "mongodb://0.0.0.0/flashcards");

// After creating a new model, require and export it:
module.exports.Flashcard = require("./flashcard.js");
