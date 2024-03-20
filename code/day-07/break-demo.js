const readlineSync = require("readline-sync");
let attempts = 0;

while (true) {
    let number = readlineSync.questionInt("give me a number! ");
    if (number === 77) {
        console.log("you won!");
        // exit the loop (early)
        break;
    }
    if (attempts > 7) {
        console.log("you lost");
        break;
    }
}
// exercise: finish this game.

/* elements of the program:
 - ask user for a guess
 - we need a fixed number (e.g. using Math.random()) for the user to guess
 - some loop to give the user 7 attempts
 - a way to give the user hints, so they have a chance to win

 > Math.random()
0.29526615524857913
> Math.random() // gives you a number between 0 and 1
0.510806886080178
> Math.random() * 100
57.791022706650594
> Math.random() * 100 // gives you a decimal/float number between 0 and <100
36.25567322112451
> Math.round(Math.random() * 100) + 1 // gives you an integer number between 1 and 100 (inclusive)
18
*/
