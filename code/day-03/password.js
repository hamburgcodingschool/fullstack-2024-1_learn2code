let readlineSync = require("readline-sync");

// usually we load it from a database
const secretPassword = "hcs-secret";
const expectedUsername = "james";

let userEnteredUsername = readlineSync.question("Username? ");
let userEnteredPassword = readlineSync.question("Give me password! ");

let correctUsername = expectedUsername === userEnteredUsername;
let correctPassword = secretPassword === userEnteredPassword;

let bothCorrect = correctUsername && correctPassword;

console.log("Correct password?: " + correctPassword);
console.log("Correct username?: " + correctUsername);
console.log("Correct password and username? " + bothCorrect);

if (bothCorrect) {
    console.log("Cool, welcome to the club!");
} else {
    console.log("Please move on, nothing to see here!");
}

// exercise: We are a bouncer in a club, and we ask people for their age
// if they are over 18 years old, they can enter!
// - ask the user for their age
// - if they are over or 18, they should be allowed to enter
// - tell them with an if statement, whether they can enter or not
