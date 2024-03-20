const readlineSync = require("readline-sync");

// Ask user for an operation. Note that this structure is similar to the main structure in exercise 14.
let operation;
let validInput = false;
let multiply; // store the decision. false: we'll be adding stuff, true: we'll be multiplying stuff.
while (!validInput) {
    operation = readlineSync.question("Should I [add] or [mul]tiply? ");
    if (operation == "add") {
        validInput = true;
        multiply = false;
    } else if (operation == "mul") {
        validInput = true;
        multiply = true;
    } else {
        console.log(
            "Please enter either 'add' or 'mul' to select an operation."
        );
    }
}
let n, total;
if (multiply) {
    n = readlineSync.questionInt("what number should I multiply up to? ");
    total = 1; // in the case of multiplication, we'll need to start the result with 1
} else {
    n = readlineSync.questionInt("what number should I add up to? ");
    total = 0; // otherwise, we'll start with 0, as before in exercise 9
}
let i = 1;
let calculation = ""; // this will collect the "calculation output"
while (i <= n) {
    // console.log(i); // optional debugging output
    // add or multiply up the step
    if (multiply) {
        total *= i;
    } else {
        total += i;
    }
    calculation += i;
    if (i < n) {
        // "not the last child": add the plus "+"/"*"
        if (multiply) {
            calculation += " * ";
        } else {
            calculation += " + ";
        }
    }
    i++; // increment operator. similar to i = i + 1
}
console.log(calculation + " = " + total);
