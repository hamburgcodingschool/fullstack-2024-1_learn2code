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

// exercise: write a loop that counts from 1 to 10
1;
2;
3;
4;
5;
6;
7;
8;
9;
10;

/*


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
*/
