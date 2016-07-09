var express = require('express');
var flashcardRouter = express.Router();

var Flashcard = require('../models/flashcard.js');

flashcardRouter.route('/') // same as /api/flashcards
    .get(function(req, res){
        Flashcard.find().exec(function(err, flashcards){
            if(err) { return response.status(404).send(err); }
            res.send(flashcards);
        })
    })
    .post(function(req, res){
        Flashcard.create({ question: req.body.question, answer: req.body.answer, answerHidden: true}),
        function(err, flashcard) {
            if (err) { return res.send(err); }
            console.log(flashcard);
            res.send(flashcard);
        }
    })

module.exports = flashcardRouter;