var monster = {
  id: 1,
  name: "Bulbasaur",
  types: ["poison", "grass"],
};
// Using the monster variable above, how could we access the name?
console.log(monster["name"]);
console.log(monster.name);
// Using the monster variable above, how could we access the 2nd type?
console.log(monster.types[1]);

var pokemon = [
  { id: 1, name: "Bulbasaur", types: ["poison", "grass"] },
  { id: 5, name: "Charmeleon", types: ["fire"] },
  { id: 9, name: "Blastoise", types: ["water"] },
  { id: 12, name: "Butterfree", types: ["bug", "flying"] },
  { id: 16, name: "Pidgey", types: ["normal", "flying"] },
  { id: 23, name: "Ekans", types: ["poison"] },
  { id: 24, name: "Arbok", types: ["poison"] },
  { id: 25, name: "Pikachu", types: ["electric"] },
  { id: 37, name: "Vulpix", types: ["fire"] },
  { id: 52, name: "Meowth", types: ["normal"] },
  { id: 63, name: "Abra", types: ["psychic"] },
  { id: 67, name: "Machamp", types: ["fighting"] },
  { id: 72, name: "Tentacool", types: ["water", "poison"] },
  { id: 74, name: "Geodude", types: ["rock", "ground"] },
  { id: 87, name: "Dewgong", types: ["water", "ice"] },
  { id: 98, name: "Krabby", types: ["water"] },
  { id: 115, name: "Kangaskhan", types: ["normal"] },
  { id: 122, name: "Mr. Mime", types: ["psychic"] },
  { id: 133, name: "Eevee", types: ["normal"] },
  { id: 144, name: "Articuno", types: ["ice", "flying"] },
  { id: 145, name: "Zapdos", types: ["electric", "flying"] },
  { id: 146, name: "Moltres", types: ["fire", "flying"] },
  { id: 148, name: "Dragonair", types: ["dragon"] },
];

// If we wanted to console.log the names of the pokemon who have an id greater than 99, we could:

for (var i = 0; i < pokemon.length; i++) {
  if (pokemon[i].id > 99) {
    console.log(pokemon[i].name);
  }
}

// Challenges - using the array of pokemon above and loops:
// 1. console.log the pokemon objects whose id is evenly divisible by 3

for (var i = 0; i < pokemon.length; i++) {
  if (pokemon[i].id % 3 == 0) {
    console.log(pokemon[i]);
  }
}

// 2. console.log the pokemon objects that have more than one type

for (var i = 0; i < pokemon.length; i++) {
  if (pokemon[i].types.length > 1) {
    console.log(pokemon[i]);
  }
}

// 3. console.log the names of the pokemon whose only type is "poison"

for (var i = 0; i < pokemon.length; i++) {
  if (pokemon[i].types == "poison") {
    console.log(pokemon[i].name);
  }
}

for (var i = 0; i < pokemon.length; i++) {
  if (pokemon[i].types.length === 1 && pokemon[i].types[0] === "poison") {
    console.log(pokemon[i].name);
  }
}

// 4. console.log the first type of all the pokemon whose second type is "flying"

for (var i = 0; i < pokemon.length; i++) {
  if (pokemon[i].types[1] == "flying") {
    console.log(pokemon[i].types[0]);
  }
}

for (var i = 0; i < pokemon.length; i++) {
  if (pokemon[i].types.length === 2 && pokemon[i].types[1] === "flying") {
    console.log(pokemon[i].types[0]);
  }
}

// Bonus Challenge: console.log the reverse of the names of the
// pokemon whose only type is "poison"

function reverseNamePoison(name) {
  var revName = "";
  for (var i = name.length - 1; i >= 0; i--) {
    revName += name[i];
  }
  return revName;
}

console.log(reverseNamePoison("Ekans"));

var temp = [];

for (var i = 0; i <= pokemon.length - 1; i++) {
  if (pokemon[i].types.length == 1) {
    if (pokemon[i].types[0] == "poison") {
      temp.push(pokemon[i].name);
    }
  }
}

var newstring = "";

for (var i = 0; i <= temp.length - 1; i++) {
  for (var j = temp[i].length - 1; j >= 0; j--) {
    newstring += temp[i][j];
  }
  newstring += " ";
}
console.log(newstring);
