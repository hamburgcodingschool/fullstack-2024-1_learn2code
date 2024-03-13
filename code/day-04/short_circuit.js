let readlineSync = require("readline-sync");

let name = readlineSync.question("What's your name?");

let nameWithDefault = name || "anonymous";
console.log(name);

console.log(typeof name);

console.log("Hello, " + nameWithDefault);

// statements vs. expressions
// expression => like a formula, where you get a value
// statements are not producing a value

if (a == 2) {
    console.log("a is two.");
}
