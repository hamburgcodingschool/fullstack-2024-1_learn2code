let readlineSync = require("readline-sync");

const secret = "123456";
let attempts = 0;
const maxAttempts = 3;

while (attempts < maxAttempts) {
    console.log("you have " + (maxAttempts - attempts) + " attempts left.");
    let password = readlineSync.question("What's the password? ");
    if (password === secret) {
        console.log("you are logged in");
        break;
    } else {
        // the password was wrong.
        // increase attempts by 1:
        attempts = attempts + 1;
    }
}
