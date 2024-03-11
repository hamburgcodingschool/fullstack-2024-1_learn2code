// load package that we need for user-interaction
let readlineSync = require("readline-sync");

// informal greeting
let name = readlineSync.question("What's your name? "); // TODO: ask the user for their name.
let greeting = "Howdy, "; // TODO: add a friendly greeting

console.log(greeting + " " + name + "!");
console.log();

// more formal greeting!
let lastName = readlineSync.question("What's your last name? "); // TODO: ask the user for their last name.
name = name + " " + lastName; // TODO: update the name to be the full name here!
let salutation = "Mr."; // TODO: ask the user for a salutation (like "Mr." or "Mrs.")
console.log("Good evening " + salutation + " " + lastName);
console.log("There's a letter for " + name + "\nI suppose it is for you?");

// now for some computations! =)
let diameter = readlineSync.questionFloat(
    "What's the diameter of your circle? "
);
let radius = diameter / 2; // TODO: compute the radius
let area = Math.PI * radius ** 2; // TODO: compute the area using the radius.
// Hint: the formula is π × r^2

console.log(
    `A circle with diameter ${diameter} and radius ${radius} has an area of ${area}. Good to know, I guess?`
);
