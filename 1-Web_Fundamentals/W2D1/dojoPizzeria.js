/* The Pizza Oven
Create a function called pizzaOven. We should feel free to customize what information we keep track of for our pizza, but let's make sure that we include the following: crustType, sauceType, cheeses, and toppings. */

var pizza = {
  crustType: ["Neapolitan hand-tossed", "Sicilian", "Chicago deep-dish"],
  sauceType: ["traditional", "marinara", "white garlic", "pesto"],
  cheeses: ["mozzarella", "ricotta", "gruyere", "feta", "goat"],
  toppings: [
    "pineapple",
    "pepperoni",
    "sausage",
    "onions",
    "mushrooms",
    "jalapeno",
    "olives",
  ],
};

// Create a function called pizzaOven that returns a JavaScript (Pizza) Object
function pizzaOven(crustType, sauceType, cheeses, toppings) {
  var pizza = {};
  pizza.crustType = crustType;
  pizza.sauceType = sauceType;
  pizza.cheeses = cheeses;
  pizza.toppings = toppings;
  return pizza;
}

// Create a pizza with: "deep dish", "traditional", ["mozzarella"], and ["pepperoni", "sausage"]
var p1 = pizzaOven("Chicago deep-dish", "traditional", "mozzarella", [
  "pepperoni",
  "sausage",
]);

console.log(p1);

// Create a pizza with: "hand tossed", "marinara", ["mozzarella", "feta"], and ["mushrooms", "olives", "onions"]
var p2 = pizzaOven(
  "Neapolitan hand-tossed",
  "marinara",
  ["mozzarella", "feta"],
  ["mushrooms", "olives", "onions"]
);

console.log(p2);

// Create 2 more pizzas with any toppings we like!
var p3 = pizzaOven(
  "Sicilian",
  "traditional",
  ["mozzarella", "goat"],
  ["pepperoni", "pineapple", "onions", "jalapeno"]
);

console.log(p3);

var p4 = pizzaOven(
  "Chicago deep-dish",
  "marinara",
  ["mozzarella", "goat", "ricotta"],
  ["pepperoni", "sausage", "onions", "mushrooms", "jalapeno", "olives"]
);

console.log(p4);

// Bonus Challenge: Create a function called randomPizza that uses Math.random() to create a random pizza!
function randomPizza(pizza) {
  var pizza = {
    crustType: ["Neapolitan hand-tossed", "Sicilian", "Chicago deep-dish"],
    sauceType: ["traditional", "marinara", "white garlic", "pesto"],
    cheeses: ["mozzarella", "ricotta", "gruyere", "feta", "goat"],
    toppings: [
      "pineapple",
      "pepperoni",
      "sausage",
      "onions",
      "mushrooms",
      "jalapeno",
      "olives",
    ],
  };
  pizza = {
    crustType:
      pizza.crustType[Math.floor(Math.random() * pizza.crustType.length)],
    sauceType:
      pizza.sauceType[Math.floor(Math.random() * pizza.sauceType.length)],
    cheeses: pizza.cheeses[Math.floor(Math.random() * pizza.cheeses.length)],
    toppings: pizza.toppings[Math.floor(Math.random() * pizza.toppings.length)],
  };
  return pizza;
}

console.log(randomPizza());
