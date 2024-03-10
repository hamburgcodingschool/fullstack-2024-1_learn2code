let readlineSync = require("readline-sync");
let name = readlineSync.question("What's your name? ");
let favoriteNumber = readlineSync.questionInt("What's your favorite number? ");
console.log("Hello, " + name + ", welcome to my program!");
console.log("Thanks for letting me know your favorite number.");
console.log("Your favorite number is: " + favoriteNumber);
console.log("If we double it, we get: " + favoriteNumber * 2 + ".");
console.log("If we add three, we get: " + (favoriteNumber + 3) + ".");
console.log("If you do both, you'll get: " + (favoriteNumber * 2 + 3) + ".");
console.log(
    "Or the other way around (add, then double): " +
        (favoriteNumber + 3) * 2 +
        "."
);
