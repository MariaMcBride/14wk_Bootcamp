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

//

function reverse(arr) {
  var i = 0;
  while (i < (arr.length - 1) / 2) {
    var temp = arr[arr.length - 1 - i];
    var current = arr[i];
    arr[i] = temp;
    arr[arr.length - 1 - i] = current;
    i++;
  }
  console.log(arr);
}
var arr = ["a", "b", "c", "d", "e"];
reverse(arr);
