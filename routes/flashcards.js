var express = require('express');
var flashcardRouter = express.Router();
var db = require("../models/index");
var Flashcard = require('../models/flashcard');

flashcardRouter.route('/') // same as /api/flashcards
    .get(function(req, res){
        Flashcard.find().exec(function(err, flashcards){
            if(err) { return response.status(404).send(err); }
            res.send(flashcards);
        })
    })
    .post(function(req, res){
        Flashcard.create({ question: req.body.question, answer: req.body.answer, answerHidden: true}, function(err, flashcard) {
            if (err) { return res.send(err); }
            console.log(flashcard);
            res.send(flashcard);
        });
    });

flashcardRouter.route('/:flashcard_id')
    .get(function(req, res){
        Flashcard.findById(req.params.flashcard_id, function(err, flashcard){
            if(err) { return res.status(404).send(err); }
            res.send(flashcard);
        });
    })
    .put(function(req, res){
        Flashcard.findOneAndUpdate({_id: req.params.flashcard_id}, req.query.post, function(err, flashcard){
            if(err) { return res.send(err); }
            res.send(flashcard);
        });
    })
    .delete(function(req, res){
        Flashcard.findByIdAndRemove(req.params.flashcard_id, function(err, flashcard){
            if(err) { return res.send(err); }
            res.status(200).send('Deleted');
        });
    })


module.exports = flashcardRouter;