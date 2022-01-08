// Rewrite the code the way it would be seen by the interpreter and predict the output.

// 1
console.log(hello);
var hello = "world";
// AFTER HOISTING:
var hello;
console.log(hello); // undefined
hello = "world";

// 2
var needle = "haystack";
test(); // ReferenceError: test is not defined
function test() {
  var needle = "magnet";
  console.log(needle);
}
// AFTER HOISTING:
var needle;
function test() {
  var needle;
  needle = "magnet";
  console.log(needle); // magnet
}
needle = "haystack";
test();

// 3
var brendan = "super cool";
function print() {
  brendan = "only okay";
  console.log(brendan);
}
console.log(brendan);
// AFTER HOISTING:
var brendan;
function print() {
  brendan = "only okay";
  console.log(brendan);
}
brendan = "super cool";
console.log(brendan); // super cool

// 4
var food = "chicken";
console.log(food);
eat(); // ReferenceError: eat is not defined
function eat() {
  food = "half-chicken";
  console.log(food);
  var food = "gone";
}
// AFTER HOISTING:
var food;
food = "chicken";
console.log(food); // chicken
function eat() {
  var food;
  food = "half-chicken";
  console.log(food); // half-chicken
  food = "gone";
}
eat();

// 5
mean();
console.log(food);
var mean = function () {
  food = "chicken";
  console.log(food);
  var food = "fish";
  console.log(food);
};
console.log(food);
// AFTER HOISTING:
// mean is not a function

// 6
console.log(genre);
var genre = "disco";
rewind();
function rewind() {
  genre = "rock";
  console.log(genre);
  var genre = "r&b";
  console.log(genre);
}
console.log(genre);
// AFTER HOISTING:
var genre;
console.log(genre); // undefined
genre = "disco";
function rewind() {
  var genre;
  genre = "rock";
  console.log(genre); // rock
  genre = "r&b";
  console.log(genre); // r&b
}
rewind();
console.log(genre); // disco

// 7
dojo = "san jose";
console.log(dojo);
learn();
function learn() {
  dojo = "seattle";
  console.log(dojo);
  var dojo = "burbank";
  console.log(dojo);
}
console.log(dojo);
// AFTER HOISTING:
dojo = "san jose";
console.log(dojo); // san jose
function learn() {
  var dojo;
  dojo = "seattle";
  console.log(dojo); // seattle
  dojo = "burbank";
  console.log(dojo); // burbank
}
learn();
console.log(dojo); // san jose

// 8 - Bonus ES6: const
console.log(makeDojo("Chicago", 65));
console.log(makeDojo("Berkeley", 0));
function makeDojo(name, students) {
  const dojo = {};
  dojo.name = name;
  dojo.students = students;
  if (dojo.students > 50) {
    dojo.hiring = true;
  } else if (dojo.students <= 0) {
    dojo = "closed for now";
  }
  return dojo;
}
// AFTER HOISTING:
// ReferenceError: makeDojo is not defined
//TypeError: Assignment to constant variable
