'use strict';
/////////////////////////////////////
/* Problem 1 (this is your demo that we'll solve in class)
Write a function called sum() that takes in two numbers as arguments and then returns an array where the first element is the sum of those numbers, and the second element is a concatenated string that EXACTLY follows this example and uses the values that were input into the function:

"The sum of 4 and 7 is 11."

Test this function by hand in the console to get it working, and when you think it is finished, uncomment the call for the testSum() function below and check the console to see if the test passes.*/

// Write your code here
function Sum(a, b) { //eslint-disable-line
  let total = a + b;
  let resultString = `The sum of ${a} and ${b} is ${total}.`;
  return [resultString];
}
  
let result = Sum(4, 7);
console.log(result);
  
  // Here is the test for sum(); uncomment it to run it
  // testSum(4, 7);
  

// Here is the test for sum(); uncomment it to run it
Sum(4, 7);

// Once you get the test passing, do an a-c-p cycle and synchronize the code between GitHub and your laptop. Don't forget to create a new branch for your work on the next question!

/////////////////////////////////////
/* Problem 2
Write a function called multiply() that takes in two numbers as arguments and returns an array where the first element is the product of those numbers, and the second element is a string that EXACTLY follows this example and uses the values that were input into the function:

"The product of 5 and 9 is 45."

Test this function by hand in the console to get it working, and when you think it is finished, uncomment the call for the testMultiply() function and see if the test passes.*/

// Write your code here
function testMultiply(a, b) { //eslint-disable-line
  let product = a * b;
  let resultString = `The product of ${a} and ${b} is ${product}.`;
  return [resultString];
}

console.log(testMultiply(5, 9)); // Correct function call with two arguments

// Here is the test for multiply(); uncomment it to run it
// testMultiply(5, 9); // This line should be commented or removed as it's not necessary for testing in this context




// Here is the test for multiply(); uncomment it to run it
testMultiply(5, 9);




// Here is the test for multiply(); uncomment it to run it
// testMultiply(5,9);

// Once you get the test passing, do an a-c-p cycle and synchronize the code between GitHub and your laptop. Don't forget to create a new branch for your work on the next question!

/////////////////////////////////////
/* Problem 3
Write a function called sumAndMultiply() that takes in three numbers as separate arguments and returns an array where the first element is the sum of those three numbers, the second element is the product of those three numbers,  and the third and fourth elements are strings that EXACTLY follow this example and use the values that were input into the function:

Third element: "4 and 7 and 5 sum to 16."
Fourth element: "The product of 4 and 7 and 5 is 140."

IMPORTANT DETAIL: You may not use the arithmetic operators + and * in this function. To do addition, use your sum() function, and to do multiplication, use your multiply() function that you've already created. You're going to have to be resourceful to figure out how to do this. However, you may continue to use the + operator for string concatenation.

Test this function by hand in the console to get it working, and when you think it is finished, uncomment the call for the testSumAndMultiply() function and see if the test passes.*/

// Write your code here

function sum(a, b) {
  return a + b;
}
function multiply(a, b) {
  return a * b;
}
function sumAndMultiply(a, b, c) {

  let sumResults = sum(sum(a, b), c);

  
  let productResults = multiply(multiply(a, b), c);

 
  let sumString = `${a} and ${b} and ${c} sum to ${sumResults}.`;
  let productString = `The product of ${a} and ${b} and ${c} is ${productResults}.`;

 
  return [sumResults, productResults, sumString, productString];
}

let results = sumAndMultiply(4, 7, 5);

console.log(results[2]); 
console.log(results[3]); 

// Here is the test for sumAndMultiply(); uncomment it to run it
// testSumAndMultiply(4, 7, 5);


// Here is the test for sumAndMultiply(); uncomment it to run it
// testSumAndMultiply(4,7,5);

// Once you get the test passing, do an a-c-p cycle and synchronize the code between GitHub and your laptop. Don't forget to create a new branch for your work on the next question!

/////////////////////////////////////
/* Problem 4
Write a function called sumArray() that takes in an array of numbers as its single argument and then returns an array where the first element is the sum of the numbers in the array, and the second element is a string that EXACTLY follows this example and uses the values that were input into the function:

"2,3,4 was passed in as an array of numbers, and 9 is their sum."

IMPORTANT DETAIL: You may not use the arithmetic operator + in this function. To do addition, use your sum() function that you've already created. You're going to have to be resourceful to figure out how to do this. However, you may continue to use the + operator for string concatenation.

Test this function by hand in the console to get it working, and when you think it is finished, uncomment the call for the testSumArray() function and see if the test passes.*/

// Write your code here
// Define the sum function

function sumArray(sumArr) {
  let sumResult = sumArr.reduce(function(acc, curr) {
    return sum(acc, curr);
  }, 0);

  let message = `${sumArr.join()} was passed in as an array of numbers, and ${sumResult} is their sum.`;

  return [message];
}

let testArray = [2, 3, 4];
console.log(sumArray(testArray));


// Here is the test for sumArray(); uncomment it to run it

sumArray(testArray);

// Once you get the test passing, do an a-c-p cycle and synchronize the code between GitHub and your laptop. Don't forget to create a new branch for your work on the next question!

/////////////////////////////////////
/* Problem 5
Write a function called multiplyArray() that takes an array of numbers as its argument and returns an array whose first element is the product of those numbers, and the second element is a string that EXACTLY follows this example and uses the values that were input into the function:

"The numbers 2,3,4 have a product of 24."

IMPORTANT DETAIL: You may not use the arithmetic operator * in this function. To do multiplication, use your multiply() function that you've already created. You're going to have to be resourceful to figure out how to do this. This function should handle an array containing three elements. However, you may continue to use the + operator for string concatenation.

Test this function by hand in the console to get it working, and when you think it is finished, uncomment the call for the testMultiplyArray() function and see if the test passes.*/

// Write your code here
function multiplyArrays(multArr) { //eslint-disable-line
  let productResult = multArr.reduce(function(acc, curr) {
    return multiply(acc, curr);
  }, 1); 
  
  let message = `The numbers ${multArr.join()} have a product of ${productResult}.`;

  
  return [message];
}

let testArrays = [2, 3, 4]; // Corrected variable name
console.log(multiplyArrays(testArrays)); // Corrected variable name

// Here is the test for multiplyArray(); uncomment it to run it
multiplyArrays(testArrays); // Uncommented test


// Once you get the test passing, do an a-c-p cycle and synchronize the code between GitHub and your laptop. 

// You're done! Submit the link to the repo following the instructions in Canvas. Or, try out the stretch goal below...

// Don't forget to create a new branch for your work on the next question, if you attempt it.

/////////////////////////////////////
/* STRETCH GOAL: Problem 6
Write a function called multiplyAnyArray() that takes an array of numbers of any length as its argument and returns an array whose first element is the product of those numbers, and the second element is a string that EXACTLY follows this example and concatenates a message using the arguments that were passed into the function:

"The numbers 1,2,3,4,5 have a product of 120."

IMPORTANT DETAIL: You may not use the arithmetic operator * in this function. To do multiplication, use your multiply() function that you've already created. You're going to have to be resourceful to figure out how to do this. However, you may continue to use the + operator for string concatenation.

This function should be dynamic, accepting an array of any length.

Test this function by hand in the console to get it working, and when you think it is finished, uncomment the call for the testMultiplyAnyArray() function and see if the test passes.*/

// Write your code here
function multiplyAnyArray(dynamicArray) { //eslint-disable-line
  let productResult = dynamicArray.reduce(function(acc, curr) {
    return multiply(acc, curr);
  }, 1); 
  
  let message = `The numbers ${dynamicArray.join()} have a product of ${productResult}.`;

  return [message];
}

let testDynamicArray = [1, 2, 3, 4, 5]; // Test array
console.log(multiplyAnyArray(testDynamicArray)); // Corrected function call

// Here is the test for multiplyArray(); uncomment it to run it
multiplyAnyArray(testDynamicArray);


// Here is the test for multiplyArray(); uncomment it to run it
// testMultiplyAnyArray(testDynamicArray);

// Once you get the test passing, do an a-c-p cycle and synchronize the code between GitHub and your laptop. You're done! Submit the link to the repo following the instructions in Canvas.
