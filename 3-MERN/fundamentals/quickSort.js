const arr1 = [22, 13, 4, 1, 8, 26, 9, 7];

// Middle Pivot
const partition = (arr, left = 0, right = arr.length - 1) => {
  let pivot = arr[Math.floor((left + right) / 2)],
    i = left,
    j = right;
  while (i <= j) {
    while (arr[i] < pivot) {
      i++;
    }
    while (arr[j] > pivot) {
      j--;
    }
    if (i <= j) {
      arr[i], arr[j] = arr[j], arr[i];
      i++;
      j--;
    }
  }
  // console.log(arr);
  // console.log(pivot);
  return i;
}

// -------------------------------------------

// End Pivot
// const partition = (arr, left = 0, right = arr.length - 1) => {
//   const pivot = arr[right];
//   let pi = left;
//   for (let i = left; i < right; i++) {
//     if (arr[i] < pivot) {
//       [arr[i], arr[pi]] = [arr[pi], arr[i]];
//       pi++;
//     }
//   }

//   [arr[pi], arr[right]] = [arr[right], arr[pi]]
//   // console.log(arr);
//   // console.log(pivot);
//   return pi;
// };

console.log(partition(arr1));

// ---------------Quick Sort------------------

// Recursive
const quicksort = (arr, left = 0, right = arr.length - 1) => {
  if (left < right) {
    pivotIndex = partition(arr, left, right);
    quicksort(arr, left, pivotIndex - 1);
    quicksort(arr, pivotIndex + 1, right);
  }
  return arr;
}

// -------------------------------------------

// // Iterative
// const quicksort = (arr) => {
//   let newArr = [], left = 0, right = arr.length - 1;
//   newArr.push({ i: left, j: right });
//   // newArr.push(0);
//   // newArr.push(arr.length - 1);

//   while (newArr.length) {
//     const { i, j } = newArr.shift();
//     // right = newArr.pop();
//     // left = newArr.pop();
//     pi = partition(arr, i, j);
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
//   return arr;
// }

console.log(quicksort(arr1));

// Bonus 1:  Different strategies are used to choose the pivot. Any pivot would work, so why not just choose an easy pivot, such as the left-most value? The answer is that the time complexity could be greatly increased if we were to call quicksort on an array that is already sorted. Diagram this out and determine why this is true.

// Bonus 2:  What is the Big O time complexity of this algorithm? Loglinear complexity

// Bonus 3:  The Big O time complexity of quicksort is actually not impressive at all.So why is it called quicksort? Remember that Big O is for the worst case scenario. In this case, the worst case scenario is unlikely to be encountered - it's when we try to quicksort a sorted array and assign the pivot to an edge value. We use Big Omega to talk about the best case scenario and Big Theta to talk about the average case.  What are the Big Omega and Big Theta time complexities of quicksort? Same - Θ(nLogn)