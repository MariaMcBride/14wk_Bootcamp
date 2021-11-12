// Write a function reverse(arr) to reverse an array:
// ["a", "b", "c", "d", "e"]; → ["e", "d", "c", "b", "a"];

function reverseArray(arr) {
  var revArr = []; // create new variable representing the reversed array
  for (var i = 0; i < arr.length; i++) {
    revArr[i] = arr[arr.length - i - 1]; // update value of revArr to the last value of the old array
  }
  return revArr;
}

console.log(reverseArray(["a", "b", "c", "d", "e"]));
