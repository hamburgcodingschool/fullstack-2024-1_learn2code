/* This is a small game, demonstrating the use of functions */
const readlineSync = require("readline-sync");
let attempts = 7;
let random = Math.floor(Math.random() * 100) + 1;
console.log(random); // cheating output

function tooManyAttempts() {
    return attempts === 0;
}

function logAttempt() {
    attempts--;
    console.log("You have " + attempts + " attempts left.");
}

function numberCorrect(number) {
    if (number === random) {
        return true;
    } else if (number > random) {
        console.log("Your too high!");
    } else {
        console.log("You're too low!");
    }
    return false;
}

function gameloop() {
    while (true) {
        let guessing = readlineSync.questionInt("What is your guess?");
        if (numberCorrect(guessing)) {
            console.log("You're right on. You win!");
            break;
        }
        logAttempt();
        if (tooManyAttempts()) {
            console.log("Annnndddd you failed!");
            break;
        }
    }
}

// this function call starts the whole thing.
gameloop();
