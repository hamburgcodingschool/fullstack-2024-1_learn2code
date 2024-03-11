// load package that we need for user-interaction
let readlineSync = require("readline-sync");

// informal greeting
let name = ""; // TODO: ask the user for their name.
let greeting = ""; // TODO: add a friendly greeting

console.log(greeting + " " + name);
console.log();

// more formal greeting!
let lastName = ""; // TODO: ask the user for their last name.
name = ""; // TODO: update the name to be the full name here!
let salutation = ""; // TODO: ask the user for a salutation (like "Mr." or "Mrs.")
console.log("Good evening " + salutation + " " + lastName);
console.log("There's a letter for " + name + "\nI suppose this is for you?");

// now for some computations! =)
let diameter = readlineSync.questionFloat(
    "What's the diameter of your circle? "
);
let radius = 0; // TODO: compute the radius
let area = 0; // TODO: compute the area using the radius.
// Hint: the formula is π × r^2

console.log(
    `A circle with diameter ${diameter} and radius ${radius} has an area of ${area}. Good to know, I guess?`
);
