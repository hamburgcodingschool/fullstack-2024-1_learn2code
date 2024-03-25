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

function initializeBoard(word) {
    let board = [];
    for (let i = 0; i < word.length; i++) {
        board.push("_");
    }
    return board;
}
function printBoard(board) {
    console.log(board.join(" "));
}

function chooseWord() {
    // reading all words into one string
    let words = fs.readFileSync(__dirname + "/hard_words.txt", {
        encoding: "utf-8",
    });
    // turn string into an array
    words = words.split("\n");
    let numberOfWords = words.length;
    let randomWordPosition = Math.floor(Math.random() * numberOfWords);
    return words[randomWordPosition];
}

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

function drawHangman(step) {
    const frames = [
        // 1
        `
    
        




_________`,
        // 2
        `
    |
    |
    |
    |
    |
    |
____|____`,
        // 3
        `     _______
    |/
    |
    |
    |
    |
    |
____|____`,
        // 4
        `     _______
    |/      |
    |
    |
    |
    |
    |
____|____`,
        // 5
        `     _______
    |/      |
    |      (_)
    |
    |
    |
    |
____|____`,
        // 6
        `     _______
    |/      |
    |      (_)
    |       |
    |       |
    |
    |
____|____`,
        // 7
        `     _______
    |/      |
    |      (_)
    |      \\|
    |       |
    |
    |
____|____`,
        // 8
        `     _______
    |/      |
    |      (_)
    |      \\|/
    |       |
    |
    |
____|____`,
        // 9
        `     _______
    |/      |
    |      (_)
    |      \\|/
    |       |
    |      /
    |
____|____`,
        // 10
        `     _______
    |/      |
    |      (_)
    |      \\|/
    |       |
    |      / \\
    |
____|____`,
    ];
    console.log(frames[step]);
}

function gameloop() {
    attempts = 0;
    while (true) {
        console.log();
        printBoard(board);
        let guess = readlineSync.question("What's your guess? ", {
            limit: alphabet,
        });
        if (letterInWord(secretWord, guess)) {
            console.log("Your letter is in the word");
            updateBoard(secretWord, guess);
        } else {
            console.log("Your letter is not in the word.");
            drawHangman(attempts);
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

const secretWord = chooseWord();
let board = initializeBoard(secretWord);
gameloop();
console.log(`The word was "${secretWord}".`);
