let readlineSync = require("readline-sync");

const secret = "123456";

let password = readlineSync.question("What's the password? ");

if (password === secret) {
    console.log("you are logged in.");
} else {
    console.log("please try again.");
    let password = readlineSync.question(
        "What's the password? (2 attempts left) "
    );
    if (password === secret) {
        console.log("you are logged in.");
    } else {
        console.log("please try again.");
        let password = readlineSync.question(
            "What's the password? (1 attempt left) "
        );
        if (password === secret) {
            console.log("you are logged in.");
        } else {
            console.log("account locked.");
        }
    }
}
