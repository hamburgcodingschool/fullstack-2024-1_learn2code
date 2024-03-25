const fs = require("fs");
const readlineSync = require("readline-sync");
const alphabet = "abcdefghijklmnopqrstuvwxyz".split(""); // needed for limiting user input

function letterInWord(word, guessedLetter) {
    if (word.indexOf(guessedLetter) != -1) {
        return true;
    } else {
        return false;
    }
}

function wordIsComplete() {
    return board.indexOf("_") == -1;
}

// examples for letterInWord(). Just TESTING code:
// console.log(letterInWord("vodoo", "f")); // false
// console.log(letterInWord("vodoo", "v")); // true
// console.log(letterInWord("vodoo", "i")); // true
// console.log(letterInWord("coding", "g")); // true
// console.log(letterInWord("coding", "a")); // false

function initializeBoard(word) {
    let board = [];
    for (let i = 0; i < word.length; i++) {
        board.push("_");
    }
    return board;
}
function printBoard(board) {
    // turn board into a string with 'join'
    // and log it
    console.log(board.join(" "));
}

// reading all words into one string
let words = fs.readFileSync(__dirname + "/hard_words.txt", {
    encoding: "utf-8",
});
// turn string into an array
words = words.split("\n");
let numberOfWords = words.length;
let randomWordPosition = Math.floor(Math.random() * numberOfWords);
const secretWord = words[randomWordPosition];
console.log(randomWordPosition);
let board = initializeBoard(secretWord);

function updateBoard(word, guessedLetter) {
    // change board here...
    // replace underscore with the letter
    // where? ==> in the index of the letter of the secret word
    for (let i = 0; i < word.length; i++) {
        let currentLetter = word[i];
        // console.log(`letter on position ${i} is ${currentLetter}`);
        // do we change the board in this position?
        if (currentLetter == guessedLetter) {
            // console.log(`updating board position ${i} with the letter!`);
            board[i] = currentLetter;
        } // we don't even an else, because we'll leave the underscore there.
    }
}

// TESTING:
// printBoard(board);
// updateBoard("EILBEK", "E");
// printBoard(board);

function gameloop() {
    attempts = 0;
    while (true) {
        printBoard(board);
        let guess = readlineSync.question("What's your guess? ", {
            limit: alphabet,
        });
        if (letterInWord(secretWord, guess)) {
            console.log("Your letter is in the word");
            updateBoard(secretWord, guess);
        } else {
            console.log("Your letter is not in the word.");
            attempts++;
            console.log("You have " + (10 - attempts) + " attempts left.");
        }
        if (attempts >= 10) {
            console.log("you lost.");
            break;
        }
        if (wordIsComplete()) {
            console.log("You win! 🎉");
            break;
        }
    }
}
gameloop();
console.log(`The word was "${secretWord}".`);
