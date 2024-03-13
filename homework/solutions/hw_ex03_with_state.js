let readlineSync = require("readline-sync");
// Ask the user for three numbers. Return the greatest.
let num1 = readlineSync.questionInt("Please enter the first number: ");
let num2 = readlineSync.questionInt("Please enter the second number: ");
let num3 = readlineSync.questionInt("Please enter the third number: ");

let greatestNumber = num1;
if (num2 > greatestNumber) {
    greatestNumber = num2;
}
if (num3 > greatestNumber) {
    greatestNumber = num3;
}
console.log("The greatest number is: " + greatestNumber);
