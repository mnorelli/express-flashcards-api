//* FLASHCARD MODEL *//

var mongoose = require("mongoose"),
    Schema = mongoose.Schema;

var FlashcardSchema = new Schema({
    question: String,
    answer: String,
    answerHidden: Boolean
});

var Flashcard = mongoose.model('Flashcard', FlashcardSchema);

module.exports = Flashcard;
