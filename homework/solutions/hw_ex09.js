const readlineSync = require("readline-sync");

// ask user for a number
let n = readlineSync.questionInt("what number should I add to? ");
// int: positive and negative whole numbers
// float: decimal fractioned numbers

let i = 1;
let total = 0;
let calculation = ""; // this will collect the "calculation output"
while (i <= n) {
    // console.log(i); // optional debugging output
    // add up the step
    total += i;
    calculation += i;
    if (i < n) {
        // "not the last child": add the plus "+"
        calculation += " + ";
    }
    i++; // increment operator. similar to i = i + 1
    // decrement: i--
    // never use ++i, unless you really know that you need it.
    // usually you place the increment *last* in a loop
}
console.log(calculation + " = " + total);
// alternative, more basic output:
// console.log(`The sum is: ${total}`);
