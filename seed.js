// This file allows us to seed our application with data
// simply run: `node seed.js` from the root of this project folder.

// var db = require("./models");

var flashcards_list =[
    {
      question: "What is Superman's guilty pleasure?", 
      answer: "Ben Affleck",
      answerHidden: true
    },
    {
      question: "I'm sorry I couldn't finish my homework...",
      answer: "the dog ate my laptop!",
      answerHidden: true
    },
    {
      question: "I get by with a little help from _________.",
      answer: "John Cena!",
      answerHidden: true
    },
    {
      question: "_________ -- It's a trap!",
      answer: "Monq's Chat room?",
      answerHidden: true
    },
    {
      question: "The class field trip was completely ruined by _________.",
      answer: "the guy in a clown suit",
      answerHidden: true
    },
    {
      question: "What's my secret power?",
      answer: "ngAnimate",
      answerHidden: true
    },
    {
      question: "Why are there so many songs about rainbows?",
      answer: "Leprachauns",
      answerHidden: true
    },
    {
      question: "Where do babies come from?",
      answer: "Netflix and Chill",
      answerHidden: true
    },
    {
      question: "How do we do auth in Angular with Satellizer?",
      answer: "I'm glad you asked.",
      answerHidden: true
    }
  ];;

db.Flashcard.remove({}, function(err, flashcards){

  db.Flashcard.create(flashcards_list, function(err, flashcards){
    if (err) { return console.log(err); }
    console.log("created", flashcards.length, "flashcards");
    process.exit();
  });

});
