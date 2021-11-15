/* Using what we've learned about the Math library in JavaScript, complete the following function that should return a value between 1 through 6 at random. */

function d6() {
  var roll = Math.random();
  roll = Math.floor(Math.random() * 6) + 1; // your code here
  return roll;
}

var playerRoll = d6();
console.log("The player rolled: " + playerRoll);

/* Using the following array, write a function that will answer all of our questions by randomly choosing a response. */

var lifesAnswers = [
  "It is certain.",
  "It is decidedly so.",
  "Without a doubt.",
  "Yes – definitely.",
  "You may rely on it.",
  "As I see it, yes.",
  "Most likely.",
  "Outlook good.",
  "Yes.",
  "Signs point to yes.",
  "Reply hazy, try again.",
  "Ask again later.",
  "Better not tell you now.",
  "Cannot predict now.",
  "Concentrate and ask again.",
  "Don't count on it.",
  "My reply is no.",
  "My sources say no.",
  "Outlook not so good.",
  "Very doubtful.",
];

function response(arr) {
  randomAnswer = Math.floor(Math.random() * arr.length);
  console.log(arr[randomAnswer]);
}
response(lifesAnswers);

// Create a function that takes in an array
// Create a variable to represent the answer and set it to Math.random() multiplied by the length of the array
// Add Math.floor to Math.random formula (+1 is only added to the end if it has to start at 1 but with an array, it has to start at 0)
// Print the current value of the array and call the function

var lifesAnswers = ["yes", "no", "maybe", "kinda sorta"];
var lifesOtherAnswers = ["um", "okay", "I guess"];

function oracle(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

var result1 = oracle(lifesAnswers);
console.log(result1);
var result2 = oracle(lifesOtherAnswers);
console.log(result2);

// Given two separate arrays, create a function that takes in an array
// Return value of the array with Math.floor(Math.random() * arr.length)
// Create variable result1 and set to call function with first set of array
// Print result1
// Create variable result2 and set to call function with second set of array
// Print result2
