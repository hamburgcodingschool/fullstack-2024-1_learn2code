let readlineSync = require("readline-sync");
// 1.1

console.log("Welcome to the number comparing program!");
let answer = readlineSync.question(
    "Do you want to compute two or three numbers? [two/2, three/3] "
);
if (answer == "two" || answer == "2") {
    console.log("Comparing Two Numbers");
    let a = readlineSync.questionInt("Give me the first number ");
    // console.log(a);
    let b = readlineSync.questionInt("Give me the second number ");

    let largest;
    if (a > b) {
        largest = a;
    } else {
        largest = b;
    }
    console.log(
        "When comparing " +
            a +
            " and " +
            b +
            ", then " +
            largest +
            " is largest."
    );
} else if (answer == "three" || answer == "3") {
    // 1.2
    console.log("Comparing Three Numbers");
    let a = readlineSync.questionInt("Give me the first number ");
    let b = readlineSync.questionInt("Give me the second number ");
    let c = readlineSync.questionInt("Give me the third number ");

    let largest;
    // &&
    if (a > b) {
        // we know that b can't be the greatest, so we still have to compare a and c
        if (a > c) {
            largest = a;
        } else {
            largest = c;
        }
    } else {
        // we know that a can't be the greatest, so we still have to compare b and c
        if (b > c) {
            largest = b;
        } else {
            largest = c;
        }
    }
    console.log(
        "When comparing " +
            a +
            ", " +
            b +
            " and " +
            c +
            ", then " +
            largest +
            " is largest."
    );
}
