// let i = 10;
// if (i < 2) {
//     console.log("is less than two");
// } else if (i < 5) {
// }

// const readlineSync = require("readline-sync");
// switch-case statement
// const direction = readlineSync.question("Direction? (L/R/U/D) ");
// switch (direction) {
//     case "L":
//         console.log("Going Left.");
//         break;
//     case "R":
//         console.log("Going Rigth.");
//         break;
//     case "U":
//         console.log("Going Up.");
//         break;
//     case "D":
//         console.log("Going Down.");
//     default:
//         console.log("Please put something valid.");
// }

//Introduction to the for loop

console.log("WHILE LOOP STARTS");

// step 1: initalize
let i = 0;
while (i < 5) {
    // step 2: loop condition

    // between step 2 and 3: do something inside the loop
    console.log(`The square of ${i} is ${i ** 2}`);

    // step 3: increment
    i++;
}
console.log("FOR LOOP STARTS");
// step 1 to 3 combined with a for-loop construct

// "for" = i want to go from 0 to 5 in steps of 1
// "do something for 5 times"
for (let i = 0; i <= 5; i++) {
    // do something inside the loop
    console.log(`The square of ${i} is ${i ** 2}`);
}
console.log();
let numbers = [7, 3, 4, 6, 99];
console.log("I have " + numbers.length + " elements");
console.log("My first number is " + numbers[0]);
for (let i = 0; i < numbers.length; i++) {
    console.log(`Element on position ${i} is ${numbers[i]}`);
}
