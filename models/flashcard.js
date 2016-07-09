//* FLASHCARD MODEL *//

var mongoose = require("mongoose"),
    Schema = mongoose.Schema;

var FlashcardSchema = new Schema({
    created_at: {
        type: Date,
        default: Date.now()
    },
    question: {
        type: String,
        required: true,
        trim: true
    },
    answer: {
        type: String,
        required: true,
        trim: true
    },
    answerHidden: {
        type: Boolean
    }
});

var Flashcard = mongoose.model('Flashcard', FlashcardSchema);

module.exports = Flashcard;
