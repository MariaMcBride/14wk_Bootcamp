//Step 1: choose any number from the arr as the pivot
//Step 2: move the nums smaller than the pivot on the left
// and nums greats than pivot on the right
//Step 3: return the pivot index

// example for nums1: (if middle idx is picked)
// pivot = 8, pivot index = 3
// expected arr after partition:
// [3,2,7,8,11,14]
// numbers on the left/right do not need to be in order
// 3,2,7 are smaller than 8. 11, 14 are larger than 8.
// return: index of the pivot: 3

const nums1 = [11, 3, 14, 10, 8, 6, 2, 7];
const nums2 = [11, 8, 14, 3, 3, 3, 6, 2, 7];
const nums3 = [1, 17, 12, 3, 9, 13, 21, 4, 27];
const nums4 = [2, 1];

// Middle Pivot
// const partition = (nums, left = 0, right = nums.length - 1) => {
//   let pivot = nums[Math.floor((left + right) / 2)],
//     i = left,
//     j = right;
//   while (i <= j) {
//     while (nums[i] < pivot) {
//       i++;
//     }
//     while (nums[j] > pivot) {
//       j--;
//     }
//     if (i <= j) {
//       [nums[i], nums[j]] = [nums[j], nums[i]];
//       i++;
//       j--;
//     }
//   }
//   console.log(nums);
//   console.log(pivot);
//   return i;
// }

// -------------------------------------------

// End Pivot
const partition = (nums, left = 0, right = nums.length - 1) => {
  const pivot = nums[right];
  let pi = left;
  for (let i = left; i < right; i++) {
    if (nums[i] < pivot) {
      [nums[i], nums[pi]] = [nums[pi], nums[i]];
      pi++;
    }
  }

  [nums[pi], nums[right]] = [nums[right], nums[pi]]
  // console.log(nums);
  // console.log(pivot);
  return pi;
};

console.log(partition(nums1));
console.log(partition(nums2));
console.log(partition(nums3));
console.log(partition(nums4));

// ---------------Quick Sort------------------

// Recursive
const quicksort = (nums = [], left = 0, right = nums.length - 1) => {
  if (left < right) {
    pivotIndex = partition(nums, left, right);
    quicksort(nums, left, pivotIndex - 1);
    quicksort(nums, pivotIndex + 1, right);
  }
  return nums;
}

// -------------------------------------------

// // Iterative
// const quicksort = (nums) => {
//   let newArr = [], left = 0, right = nums.length - 1;
//   newArr.push({ i: left, j: right });
//   // newArr.push(0);
//   // newArr.push(nums.length - 1);

//   while (newArr.length) {
//     const { i, j } = newArr.shift();
//     // right = newArr.pop();
//     // left = newArr.pop();
//     pi = partition(nums, i, j);
//     if (pi - 1 > i) {
//       newArr.push({ i: i, j: pi - 1 });
//       // newArr.push(left);
//       // newArr.push(pi - 1);
//     }
//     if (pi + 1 < j) {
//       newArr.push({ i: pi + 1, j: j });
//       // newArr.push(pi + 1);
//       // newArr.push(right);
//     }
//   }
//   return nums;
// }

console.log(quicksort(nums1));
console.log(quicksort(nums2));
console.log(quicksort(nums3));
console.log(quicksort(nums4));

