var readlineSync = require("readline-sync");

var userName = readlineSync.question("What's your name?\n");
var score = 0;
console.log(`Welcome ${userName} to the world of DhruPotter`);

// play function

function play(question, answer) {
  var userAnswer = readlineSync.question(`${question}\nYour Answer: `).toUpperCase();
  if (userAnswer === answer) {
    console.log("Right!");
    score = score + 1;
    console.log("Your current score is: " + score);
    console.log("-------------");

  } else {
    if (userAnswer === "Q") {
      return "Quit";
    }
    console.log("Wrong!");
    score = score - 1;
    console.log("Your current score is: " + score);
    console.log("-------------");
  }
}

// array of questions

var questions = [{
  question: `1. Where do I live?
  A. Manila Towers
  B. Aanal Towers
  C. Takshshila
  D. Hogwarts`,
  answer: "D"
}, {
  question: `2. What is my favourite house?
  A. Slytherin
  B. Gryffindor
  C. Hufflepuff
  D. Ravenclaw`,
  answer: "B"
}, {
  question: `3. Which broomstick do I have?
  A. The Firebolt
  B. The Nimbus 2000
  C. The Thunderbolt VII
  D. The Shooting Star`,
  answer: "B"
}, {
  question: `4. What wand do I have?
  A. Walnut and dragon heartstring wand
  B. Willow wood wand with unicorn hair core
  C. The Elder Wand
  D. Yew wand with phoenix feather core`,
  answer: "C"
}, {
  question: `5. What is my favourite cafe?
  A. Leaky Cauldron
  B. Starbucks
  C. McDonald's
  D. The Three Broomsticks Inn`,
  answer: "D"
}, {
  question: `6. What do you thing I prefer more for vacations?
  A. The Burrow
  B. Switzerland
  C. The Deathly Hallows
  D. Spain`,
  answer: "A"
}, {
  question: `7. Who is my favourite proffessor?
  A. Severus Snape
  B. Albus Dumbledore
  C. Rubeus Hagrid
  D. Remus Lupin`,
  answer: "B"
}, {
  question: `8. What do you thinks scares me the most?
  A. The Dark Lord
  B. The Dementors
  C. Prof. Snape
  D. The Whomping Willow`,
  answer: "C"
}, {
  question: `9. Who is my best friend?
  A. Hermoine Granger
  B. Ron Weasly
  C. Harry Potter
  D. Draco Malfoy`,
  answer: "A"
}, {
  question: `10. What is my favourite spell?
  A. Expecto Patronum
  B. Accio
  C. Alohomora
  D. Wingardium Leviosa`,
  answer: "B"
}]

// loop

for (var i = 0; i < questions.length; i++) {
  var currentQuestion = questions[i];
  const result = play(currentQuestion.question, currentQuestion.answer);
  if (result === "Quit") {
    console.log(`Sorry to see you go`)
    break;
  }

}

function conclude() {
  console.log(`Your final score is ${score}. Hope you enjoyed..Hope we meet at Hogwarts next year!😁`)
}

conclude()
