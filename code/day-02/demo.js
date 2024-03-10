let readlineSync = require("readline-sync");

console.log("Welcome to my program :)");
// alert("Test!"); // only exists in the browser!
// prompt("What's your name?") // same

//readlineSync.question("How are you doing?");

let myNumber = 10;
console.log(myNumber);
console.log("Next number after myVariable is: " + (myNumber + 1));

let width = 12;
let area = width * width;
console.log("A square with width " + width + " has an area of " + area);

let name = readlineSync.question("What's your name? ");
console.log("Hello, " + name + ", welcome to my program!");

// Exercise: output the length of the name
//           that the user gave you!
console.log("Your name has length: " + name.length);
console.log("Bye, " + name + " the lesson is over, thank you!");
