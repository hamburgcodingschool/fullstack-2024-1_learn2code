# Exercise Set 4: For Loops

The `for` loop construct is mostly to make some `while`-loop constructs more conscise.
Everwhere where you could you a `while` loop, it's also possible to write a for loop.
Sometime one or the other makese "more sense", but it's sometimes up to taste.

## Exercise 15: Infinite loop

The most "simple" while loop is the following:

```
while (true) {
    console.log("I'm running forvever!");
    console.log(Math.random() + ", so you can see a change.");
}
```

(Try it and cancel your program with Ctrl+C)

Your task is to write the same, but with a `for` loop construct.

### Hints

-   remember that the for loop has three elements in its parentheses
    1. initialization
    2. condition
    3. increment (or more general: "afterthought")
-   you need two semicola inside the for loop to make it syntactically correct, but all of the elements are optional
-   think about which of the three things you really need
-   if you have no idea, go ahead and read https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for

## Exercise 16: Rewriting more while loops

Rewrite all solutions to the `while` loop exercises, but use a `for` loop instead.
Think about which version you like better.
