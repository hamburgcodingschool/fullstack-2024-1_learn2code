const readlineSync = require("readline-sync");

// ask user for a number
let n = readlineSync.questionInt("what number should I add to? ");

let total = 0;
let calculation = ""; // this will collect the "calculation output"
for (let i = 1; i <= n; i++) {
    // add up the step
    total += i;
    calculation += i;
    if (i < n) {
        // "not the last child": add the plus "+"
        calculation += " + ";
    }
}
console.log(calculation + " = " + total);
