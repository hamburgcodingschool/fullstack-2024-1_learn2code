# Exercise Set 5: Arrays

These exercises are to deepen you understanding of the `array` data type,
but the previous knowledge is still very relevant and will be used here as well.

## Exercise 17

### Trying out different Array functions

Arrays are a more complex data type and you interact with them mostly through functions.
This is different to for example a number, which can be added to another number through `+`,
or a boolean which has operations like `||` and `&&`.

For example one function is called `reverse`. It allows you to, well, reverse an array, like this:

```js
> [10,20,30].reverse()
[ 30, 20, 10 ]
```

This task asks you to try the following array functions. Figure out how they work and what they do:

-   `push`/ `unshift`
-   `pop` / `shift`
-   `includes`
-   `slice`
-   `join`

Hint: Make heavy use of online documentation like [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array) here.

## Exercise 18

### Calculate the number of full aged people.

You are given a list of ages, like this:

```js
let ages = [21, 12, 16, 34, 18, 21, 22, 15, 25, 30];
```

Count (by using a javascript program, of course), how many of these 10 people are younger than 18.

#### Hints

-   Use a for loop to iterate through the values of an array
-   declare a variable (or more) outside the loop to keep track of the count(s)
