let readlineSync = require("readline-sync");

let name = readlineSync.question("What's your name?");

let nameWithDefault = name || "anonymous";

console.log("Hello, " + nameWithDefault);
