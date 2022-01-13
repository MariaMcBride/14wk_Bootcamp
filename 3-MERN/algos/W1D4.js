const sortedA1 = [];
const sortedB1 = [];
//expected output: [];

const sortedA2 = [5];
const sortedB2 = [2];
//expected output: [2, 5];

const sortedA3 = [3];
const sortedB3 = [2, 3, 4, 7];
//expected output: [2, 3, 3, 4, 7];

const sortedA4 = [1, 2, 4, 6, 9];
const sortedB4 = [3, 7, 8, 10, 11, 12];
//expected output: [1, 2, 3, 4, 6, 7, 8, 9, 10, 11, 12];

// Merge Pseudo Code - Multiple Loops
// 1. Create a function that accepts an array and returns the array
// 2. Create two variables that stores the indexes of the first and second array
// 3. Create a third variable for the sorted array
// 4. Create a while loop that keeps running if both i and j are less than the length of both arrays
// 5. If the first element of the second array (j) is greater than the first (i)
// 6. Push i into the sorted array, else push j
// 7. Create a while loop for both arrays that pushes the rest of the elements to the sorted array

// const merge = (arr1, arr2) => {
//   let i = 0, j = 0, newArr = [];
//   while (i < arr1.length && j < arr2.length) {
//     if (arr2[j] > arr1[i]) {
//       newArr.push(arr1[i]);
//       i++;
//     } else {
//       newArr.push(arr2[j]);
//     }
//   }
//   while (i < arr1.length) {
//     newArr.push(arr1[i]);
//     i++;
//   }
//   while (j < arr2.length) {
//     newArr.push(arr2[j]);
//     j++;
//   }
//   return newArr;
// }

// Merge Sort Pseudo Code
// 1. Create a function that accepts an array
// 2. Create a base case that returns the sub-array if the array only has one element
// 3. Create a middle point of the array and store the value in a variable
// 4. Use middle value to divide the array into left and right sub-arrays by using the array slice method
// 5. Pass the left and right arrays to the mergeSort function and call recursively
// 6. Pass left and right into merge function and return value

// const mergeSort = (arr) => {
//   if (arr.length <= 1)
//     return arr;

//   let mid = Math.floor(arr.length / 2);
//   let left = mergeSort(arr.slice(0, mid));
//   let right = mergeSort(arr.slice(mid));
//   return merge(left, right);
// }

// -------------------------------------------

// Merge Pseudo Code - Using Shift
// 1. Create an empty new array
// 2. Create a while loop that iterates while the sub-arrays are not equal to 0
// 3. Check the first elements in both sub-arrays (since first elements are sorted) and pick the smaller among the smallest element in both sub-arrays and push them into the new array while deleting the picked element
// 4. After one of the sub-arrays become empty, push leftover elements from the non-empty array into the main array

const merge = (arr1, arr2) => {
  let newArr = [];
  while (arr1.length && arr2.length) {
    if (arr1[0] < arr2[0]) {
      newArr.push(arr1.shift());
    } else {
      newArr.push(arr2.shift());
    }
  }
  return [...newArr, ...arr1, ...arr2];
}

// Merge Sort Pseudo Code
// 1. Set a base case
// 2. Identify midpoint and split array into 2 halves using splice
// 3. Process repeats until base case is met
// 4. Return combine sub-arrays using merge function

const mergeSort = (arr) => {
  if (arr.length < 2)
    return arr;

  const mid = Math.floor(arr.length / 2);
  const left = arr.splice(0, mid);
  return merge(mergeSort(left), mergeSort(arr));
}

// -------------------------------------------

// const merge = (arr1, arr2) => {
//   let newArr = [], i = 0, j = 0;
//   while (i < arr1.length && j < arr2.length) {
//     if (arr1[i] < arr2[j]) {
//       newArr.push(arr1[i]);
//       i++;
//     } else {
//       newArr.push(arr2[j]);
//       j++;
//     }
//   }
//   return newArr
//     .concat(arr1.slice(i))
//     .concat(arr2.slice(j));
// }

// const mergeSort = (arr) => {
//   if (arr.length <= 1) {
//     return arr;
//   }
//   const mid = Math.floor(arr.length / 2);
//   const left = arr.slice(0, mid);
//   const right = arr.slice(mid);
//   return merge(
//     mergeSort(left), mergeSort(right)
//   );
// }

// -------------------------------------------

// Nate
// let tempArr = [];
// while (arr1.length || arr2.length) {
//   if (typeof arr1[0] === 'undefined') {
//     tempArr.push(arr2[0]);
//     arr2.splice(0, 1);
//   } else if (arr1[0] > arr2[0]) {
//     tempArr.push(arr2[0]);
//     arr2.splice(0, 1);
//   } else {
//     tempArr.push(arr1[0]);
//     arr1.splice(0, 1);
//   }
// }
// return tempArr;

console.log(merge(sortedA1, sortedB1));
console.log(merge(sortedA2, sortedB2));
console.log(merge(sortedA3, sortedB3));
console.log(merge(sortedA4, sortedB4));
console.log(mergeSort(sortedA1, sortedB1));
console.log(mergeSort(sortedA2, sortedB2));
console.log(mergeSort(sortedA3, sortedB3));
console.log(mergeSort(sortedA4, sortedB4));
// Time complexity O(n)