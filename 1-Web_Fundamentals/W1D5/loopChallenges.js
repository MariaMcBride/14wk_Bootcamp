// 1. Print odds 1-20: Using a loop write code that will console.log all of the odd values from 1 up to 20.

for (var i = 1; i <= 20; i++) {
  if (i % 2 != 0) {
    console.log(i);
  }
}
//
var i = 1;
while (i <= 20) {
  if (i % 2 != 0) {
    console.log(i);
  }
  i++;
}

// 2. Decreasing Multiples of 3: Using a loop write code that will console.log all of the values that are evenly divisible by 3 from 100 down to 0.

for (var i = 100; i >= 0; i--) {
  if (i % 3 == 0) {
    console.log(i);
  }
}
//
var i = 100;
while (i >= 0) {
  if (i % 3 == 0) {
    console.log(i);
  }
  i--;
}

// 3. Print the sequence: Using a loop write code that will console.log the values in this sequence 4, 2.5, 1, -0.5, -2, -3.5.

var arr = [4, 2.5, 1, -0.5, -2, -3.5];
for (var i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}
//
var arr = [4, 2.5, 1, -0.5, -2, -3.5];
var i = 0;
while (i < arr.length) {
  console.log(arr[i]);
  i++;
}

// 4. Sigma: Write code that will add all of the values from 1-100 onto some variable sum and at the end console.log the result 1 + 2 + 3 + ... + 98 + 99 + 100. We should get back 5050 at the end.

function sigma() {
  var sum = 0;
  for (var i = 1; i < 100; i++) {
    sum += i;
  }
  console.log(i + sum);
}

sigma();
//
function sigma(lowNum, highNum) {
  var sum = lowNum;
  var sequence = lowNum + " + ";
  for (var i = lowNum + 1; i < highNum; i++) {
    sum += i;
    sequence += i + " + ";
  }
  sum += i;
  sequence += i;
  console.log(sequence + " = " + sum);
  return sum, sequence;
}

sigma(1, 100);

// 5. Factorial: Write code that will multiply all of the values from 1-12 onto some variable product and at the end console.log the result 1 * 2 * 3 * ... * 10 * 11 * 12. We should get back 479001600 at the end.

function factorial() {
  var product = 1;
  for (var i = 1; i < 12; i++) {
    product *= i;
  }
  console.log(i * product);
}

factorial();
//
function factorial(lowNum, highNum) {
  var product = lowNum;
  var sequence = lowNum + " * ";
  for (var i = lowNum; i < highNum; i++) {
    product *= i;
    sequence *= i + " * ";
  }
  product *= i;
  sequence *= i;
  console.log(sequence + " = " + product);
  return product, sequence;
}

factorial(1, 12);
