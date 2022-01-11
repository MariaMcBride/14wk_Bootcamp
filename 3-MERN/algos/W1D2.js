const numsOrdered = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const numsRandomOrder = [9, 2, 5, 6, 4, 3, 7, 10, 1, 8];
const numsReversed = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
const expected = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function selectionSort(nums) {
  for (let i = 0; i < nums.length - 1; i++) {
    let min = i;
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[j] < nums[min]) {
        min = j;
      }
    }
    if (min != i) {
      [nums[i], nums[min]] = [nums[min], nums[i]];
    }
  }
  return nums;
}

console.log(selectionSort(numsRandomOrder));

// Jeremy
function selectionSort(numsArray) {
  let nums = [...numsArray];
  for (let j = nums.length - 1; j >= 0; j--){
  let max_index = j;
    for (let i = 0; i < j; i++) {
      if (nums[i] > nums[max_index])
      max_index = i;
    }
  [nums[j], nums[max_index]] = [nums[max_index], nums[j]];
  }
  return nums;
}

console.log(selectionSort(numsRandomOrder));
console.log(numsRandomOrder);

// Jeremy
function selectionSort2(numsArray){
  let nums = [...numsArray];
  //loop through the array to the end.
  for (let i = 0; i < nums.length - 1; i++){
    // setting the first index as the min to start comparing the value
    let min = i;
    // compare the other element starting from the right of i since all elements before i should be sorted
    for (let j = i+1; j < nums.length; j++){
      if (nums[j] < nums[min]){
        min = j;
      }
    }
    [nums[i], nums[min]] = [nums[min] , nums[i]];
  }
  return nums;
}

console.log(selectionSort2(numsRandomOrder));

//----------------------------------------------------------------

// Jeremy
function insertionSort2(nums){
  for (let i = 1; i < nums.length; i++){
    currentEle = nums[i];
    let j = i - 1;
    while (j >= 0 && nums[j] > currentEle){
      nums[j + 1] = nums[j];
      j = j - 1;
    }
    nums[j + 1] = currentEle;
  }
  return nums;
} 

console.log(insertionSort2(numsRandomOrder));

  //given an unsorted array, sort the array using insertSort
  // i.e. sort the first element. When it goes the a new element, move the element to the right position. 

  // step1: [9, 2, 5, 6, 4]; (9 is sorted)
  // step2: [2, 9, 5, 6, 4]; ([2,9] is sorted)
  // step3: [2, 5, 9, 6, 4]; ([2,5,9] is sorted)
  // 5 is smaller than 9, so we move 5 to the right position.
  // step4: [2, 5, 6, 9, 4]; ([2,5,6,9] is sorted) 
  // step5: [2, 4, 5, 6, 9]; ([2,4,5,6,9] is sorted) 


