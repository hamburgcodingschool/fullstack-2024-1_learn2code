// why using functions?
// => maybe makes it easier?
// => to enable us to repeat things (and encapsulate them)
// what can functions do?
// => function are used to carry out specific task
// Examples:
// - Math.random() => we use it to compute a random number
// - console.log()
// - readlineSync.question()

// elements of a function:
// - an identifier (a name)
// - return value (optional) => this comes out
// - parameters (optional) => this goes in. also called arguments.

// example of a function without parameters and without return parameters.
// it's not that useful, to be honest, but shows you the syntax:
// you need the `function` keyword and the name followed by `()`.
// Then there's the `{}` function block.
function initializeGame() {
    let cheatMode = true;
    let attempts = 7;
    let random = Math.round(Math.random() * 100) + 1;
    if (cheatMode) {
        console.log("psst, the random is " + random);
    }
}
initializeGame();
// initializeGame();

// This one doesn't have parameters, but a return value.
function getRandomName() {
    const names = ["James", "Erica", "Peter", "Goku", "Tanja"];
    let position = Math.floor(Math.random() * names.length);
    // console.log(position);
    return names[position];
}

// note that you need to log the value. it's not logged inside the function.
console.log(getRandomName());
console.log(getRandomName());
console.log(getRandomName());
console.log(getRandomName());

// this is an example of a function with a parameter and a return value
function isItEven(number) {
    return number % 2 === 0;
}
// console.log(number); // fails, because number only exists inside the function
console.log(isItEven(6));
console.log(isItEven(7));
let myNeatNumber = 10;
console.log(isItEven(myNeatNumber));
console.log("================");

// Exercise:
// Write a function that is called "printNumbers"
// it takes one argument "number"
// and it console.logs the numbers from 0 to that number
//
// you'll call it like:
// printNumbers(15)
function printNumbers(number) {
    for (let i = 0; i <= number; i++) {
        console.log(i);
    }
}
printNumbers(15);
printNumbers("hello");
printNumbers(3);

// Exercise:
// write a function that takes the name
// and greets the user with "Hello, ..."
// the parameter is just `name`
// and it should be called `greetUser`

let name1 = "Moritz";
let name2 = "Zhora";
function greetUser(name) {
    console.log("Hello, " + name);
}
greetUser(name1);
greetUser(name2);
greetUser("James");
