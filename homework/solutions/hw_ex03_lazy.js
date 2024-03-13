let readlineSync = require("readline-sync");
// Ask the user for three numbers. Return the greatest.
let num1 = readlineSync.questionInt("Please enter the first number: ");
let num2 = readlineSync.questionInt("Please enter the second number: ");
let num3 = readlineSync.questionInt("Please enter the third number: ");

console.log("The greatest number is: " + Math.max(num1, num2, num3));
