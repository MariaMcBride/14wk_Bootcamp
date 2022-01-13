const numsOrdered = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const numsRandomOrder = [9, 2, 5, 6, 4, 3, 7, 10, 1, 8];
const numsReversed = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
const expected = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Pseudo Code
// 1. Create a for loop that initializes i at 1 since the first element
// 2. Create a current variable to keep track of the current element (start of unsorted array)
// 3. Create a variable that tracks the element before (part of sorted array)
// 4. Create a while loop that goes through the sorted array from right to left and as long as nums[j] is bigger than the current element, then shift nums[j] to the right at nums[j+1]
// 5. Insert current element next to nums[j]

const insertionSort = (nums) => {
  for (let i = 1; i < nums.length; i++) {
    let current = nums[i];
    let j = i - 1;
    while (j >= 0 && nums[j] > current) {
      nums[j + 1] = nums[j];
      j--;
    }
    nums[j + 1] = current;
  }
  return nums;
}

// -------------------------------------------

// Pseudo Code
// 1. Establish second pointer j and set to value of i
// 2. For loop will iterate forward and while loop iterates backward to compare it to each value in the sorted array (right = unsorted, left = sorted)
// 3. While j is greater than 0 (hasn't reached the beginning of the array) && while the value of nums[j](right element) is less than the element before (nums[j-1])
// 4. Swap values so the greater value is on the right and the starting value is inserted into the right spot
// 5. Decrement j so that on the next iteration, the same element we started with can still be swapped

const insertionSort = (nums) => {
  for (let i = 1; i < nums.length; i++) {
    let j = i;
    while (j > 0 && nums[j] < nums[j - 1]) {
      [nums[j - 1], nums[j]] = [nums[j], nums[j - 1]];
      j--;
    }
  }
  return nums;
}

// -------------------------------------------

// Kevin
// function insertionSort(nums) {
//   for (let i = 1; i < nums.length; i++) {
//     if (nums[i] < nums[i - 1]) {
//       for (j = i; j > 0; j--) {
//         if (nums[j] > nums[j - 1]) {
//           break
//         }
//         [nums[j], nums[j - 1]] = [nums[j - 1], nums[j]]
//       }
//     }
//   } return nums
// }

console.log(insertionSort(numsRandomOrder));
// Time complexity O(n^2) 