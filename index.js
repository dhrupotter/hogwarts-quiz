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
  question: `1. What house at Hogwarts does Harry belong to?
  A. Slytherin
  B. Gryffindor
  C. Hufflepuff
  D. Ravenclaw`,
  answer: "B"
}, {
  question: `2. What position does Harry play on his Quidditch team?
  A.Seeker
  B.Keeper
  C.Bludger
  D.Chaser`,
  answer: "A"
}, {
  question: `3. Who gave Harry the scar on his forehead?
  A.Voldemort
  B.Hagrid
  C.Hedwig
  D.Lily`,
  answer: "A"
}, {
  question: `4. What wand do Harry have ?
  A.Walnut and dragon heartstring wand
B.Willow wood wand with unicorn hair core
C.The Elder Wand
D.Yew wand with phoenix feather core`,
  answer: "C"
}, {
  question: `5. What does the Imperius Curse do?
  A. Kills
B. Tortures
C. Turns into Pig
D. Controls`,
  answer: "D"
}, {
  question: `6. What is an Auror?
  A.Professional Player
  B. Wizard
  C.Career Counselor
D. Dark Wizard Catcher`,
  answer: "D"
}, {
  question: `7. Who kills Professor Dumbledore? ?
  A.Severus Snape
B. Draco Malfoy
C.Rubeus Hagrid
D.Remus Lupin`,
  answer: "B"
}, {
  question: `8. How does Harry catch his first snitch?
  A. With his broom
B. In his hat
C. In his mouth
D. With his feet`,
  answer: "C"
}, {
  question: `9. Who is Harry's best friend ?
  A.Hermoine Granger
B.Ron Weasly
C.Harry Potter
D.Draco Malfoy`,
  answer: "A"
}, {
  question: `10. Who is Grawp?
  A. Sirius House Elf
B. A centaur
C. Hagrid's half brother
D. Ron's mouse`,
  answer: "C"
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
