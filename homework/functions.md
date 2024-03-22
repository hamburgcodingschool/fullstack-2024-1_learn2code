# Exercise Set 6: Functions

## Exercise 19

### Write some small helper functions

1. Write a function that prints the same word more times.

```js
> printWordManyTimes("hello", 5);
hellohellohellohellohello
```

2. Write a function that prints the sum of two numbers.
   The 2 numbers should be passed in as parameters
   e.g. `add(3,5)` prints 8

3. Write a function that takes an array as a parameter
   The function should print every element in the array
   e.g. `printArrayElements([3,5,7])` prints
    ```
    3
    5
    7
    ```

## Exercise 21

### Time Tracker

Write a set of functions that could be used in a small time tracker application.
The idea is that we have "database" of minutes (just an array of numbers).

```js
let times = []; // keep track of minutes in this array
```

Then we need a set of different functions to interact with the array:

-   `trackTime(10)` adds the number of minutes to the "database"
-   `totalTime()` returns how many minutes we have tracked so far
-   `numberOfEntries()` returns how many entries we have tracked so far
-   `averageTime()` returns the average number of minutes spent

For example, if I call

```js
trackTime(10);
trackTime(20);
trackTime(36);
```

and then

```js
console.log(totalTime());
console.log(numberOfEntries());
console.log(averageTime());
```

I should get

```
66
3
22
```

## Exercise 22

### Hangman helper functions

This homework will prepare everything we need in order to program a game of [hangman](<https://en.wikipedia.org/wiki/Hangman_(game)>) on Friday.

#### `letterInWord(word, guess)`

Write a function, that returns a boolean (`true`/`false`) dependent on whether a guessed letter is part

```js
// examples for letterInWord()
console.log(letterInWord("vodoo", "f")); // false
console.log(letterInWord("vodoo", "v")); // true
console.log(letterInWord("vodoo", "i")); // true
```

Hint: You can use a function named [`indexOf`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/indexOf) here.

#### `updateBoard(guess)`

This function will make sure to draw the correctly guessed letters on the board. The game will internally keep track of the board by using an array like this:

```js
let board = ["_", "_", "_", "_", "_", "_"]; // board for a 6 letter word
```

Given a guess, we need to update our `board` array to show the guessed character on the board.

-   go over `word` character by character
-   if character is equal to the guess replace the `"_"` in `board` on that position with the character of the guess.

```js
// Example for testing the function
let word = "voodoo";
let board = ["_", "_", "_", "_", "_", "_"];
updateBoard("o");
console.log(board); // ['_', 'o', 'o', '_', 'o', 'o'];
```
