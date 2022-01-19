const squareMatrix1 = [
  [1, 2, 3],
  [4, 5, 6],
  [9, 8, 9],
];
const expected1 = 2;
//left to right diagonal: 1 + 5 + 9 = 15
//right to left diagonal: 3 + 5 + 9 = 17
//absolute difference = 2

const squareMatrix2 = [
  [1, 2, 3, 4, 5],
  [1, 2, 3, 4, 5],
  [1, 2, 3, 4, 5],
  [1, 2, 3, 4, 5],
  [1, 2, 3, 4, 5],
];
const expected2 = 0;
//left to right diagonal: 1 + 2 + 3 + 4 + 5 = 15
//right to left diagonal: 5 + 4 + 3 + 2 + 1 = 15
//absolute difference = 0

// Pseudo Code
// 1. Create two variables that represents the sum of the two diagonals and initialize at 0
// 2. Create a for loop with two iterators, one incrementing and one decrementing (i initialized at 0 incrementing by 1 and j initialized at the last index of the array and decrementing by 1)
// 3. Find the sum of the first and second diagonals
// 4. Calculate difference between the sums of the first and second diagonals
// 5. Create a conditional to make sure the total is positive
// 6. Alternatively, use Math.abs to calculate the absolute value of the difference

// const diagonalDifference = (sqrMatrix) => {
//   //given a square matrix (2d array) of integers
//   // calculate the absolute difference between the sum of its diagonals
//   let len = sqrMatrix.length;
//   let diagonalSum1 = 0;
//   let diagonalSum2 = 0;
//   let difference = 0;

//   for (let i = 0, j = len - 1; i < len, j > -1; i++, j--) {
//     diagonalSum1 += sqrMatrix[i][i];
//     diagonalSum2 += sqrMatrix[i][j];
//   }

//   difference = diagonalSum1 - diagonalSum2;

//   if (difference > 0) {
//     return difference;
//   }
//   else if (difference < 0) {
//     return (difference * (-1));
//   } else return 0; // or return absolute value with Math.abs
// }

// -------------------Using two pointers (i, j)---------------------

// const diagonalDifference = (sqrMatrix) => {
//   let diagonalSum1 = 0, diagonalSum2 = 0;
//   for (let i = sqrMatrix.length - 1; i >= 0; i--) {
//     let j = sqrMatrix.length - 1 - i;
//     diagonalSum1 += sqrMatrix[j][j];
//     diagonalSum2 += sqrMatrix[i][j];
//   }
//   return Math.abs(diagonalSum1 - diagonalSum2);
// }

// ---------------------Using one pointer (i)----------------------

const diagonalDifference = (sqrMatrix) => {
  let diagonalSum1 = 0, diagonalSum2 = 0;
  for (let i = 0; i < sqrMatrix.length; i++) {
    diagonalSum1 += sqrMatrix[i][i]
    diagonalSum2 += sqrMatrix[i][sqrMatrix.length - 1 - i]
  }
  return Math.abs(diagonalSum1 - diagonalSum2)
}

console.log(diagonalDifference(squareMatrix1));
console.log(diagonalDifference(squareMatrix2));
