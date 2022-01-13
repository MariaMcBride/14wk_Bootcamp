// ref: https://www.hackerearth.com/practice/algorithms/sorting/bubble-sort/visualize/

// To test the function, use Shell in the terminal on the right. Type node W1D1.js


const numsOrdered = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const numsRandomOrder = [9, 2, 5, 6, 4, 3, 7, 10, 1, 8];
const numsReversed = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
const expected = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const bubbleSort = (nums) => {
  //given an unsorted array, sort the array using bubbleSort
  // i.e. keep swapping the largest value and put it at the end
  let swapped = false;
  for (let i = 0; i < nums.length; i++) {
    swapped = false;
    for (let j = 0; j < nums.length; j++) {
      if (nums[j] > nums[j + 1]) {
        // nums[j], nums[j + 1] = nums[j + 1], nums[j];
        let temp = nums[j]
        nums[j] = nums[j + 1];
        nums[j + 1] = temp;
        swapped = true;
      }
    }
    if (!swapped) {
      break;
    }
  }
  return nums;
}
console.log(bubbleSort(numsRandomOrder));
// Time complexity is O(n^2)
