// This is already an extended solution, which includes different languages, as suggested in Exercise 7

let readlineSync = require("readline-sync");

let language = readlineSync.question(
    "Enter your language | Wähle Deine Sprache [DE|EN]? "
);

let germanOutput = language.toLowerCase() == "de";

// output gets printed
if (germanOutput) {
    console.log("Willkommen! Schön, dass Du da bist!");
} else {
    console.log("Welcome! Nice you're here!");
}
