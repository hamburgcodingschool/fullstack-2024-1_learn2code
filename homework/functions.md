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
