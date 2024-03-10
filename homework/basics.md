# Exercise Set 1: Basics

This set of exercices requires you to know about

-   basic data types (boolean, number, string)
-   how to call a function
-   how to create a more complex expression
    -   by nesting function calls
    -   by combining expressions with operators
-   the basics of variable bindings (using `let`)

The exercices might introduce new concepts, but I'll try to make that explicit.

## Exercise 1

### 1a) Adding different data types

In class we have seen, how you can add numbers like this:

```js
> 10+20
30
```

or to concatenate strings, like this:

```js
> "mad" + "hatter"
'madhatter'
```

But what if you add a number and a string (like `"Lucky Number " + 7`?).
What does `"20"+24` do? Try it! Can you explain the behavior?

Hint: Read the Eloquent JS section on [type conversion](https://eloquentjavascript.net/01_values.html#h-AY+YGu6qyM).

### 1b) Asking for different data types with readline-sync

In class we have seen, how to ask a user for their name, like this:

```js
let readlineSync = require("readline-sync");
let name = readlineSync.question("What's your name?");
console.log("Hello, " + name + ", welcome to my program!");
```

Try to ask the user for their favorite number instead and print it!

-   The program should ask "What's your favorite number?"
-   Let's say the user enters 7.
-   Print it back to them: "Thanks for letting me know that your favorite number is 7".

Now add 3 to the number and give it back as well:

-   "Thanks for letting me know your favorite number. If we add 3, we get: 10"

#### Hints

If you try this, you might get the problem as shown in exercise 1a, that there's an automatic type conversion happening.
Your output might look like: "Thanks for letting me know your favorite number. If we add 3, we get: 73".
That's okay, and a good first step towards the solution! How to solve it though?

For this use-case there's another method in the readline-sync package. It's called `questionInt`. Here's an example:

```js
let readlineSync = require("readline-sync");
let name = readlineSync.question("What's your name?");
let favoriteNumber = readlineSync.questionInt("What's your favorite number?");
console.log("Hello, " + name + ", welcome to my program!");
console.log("Your favorite number is: " + favoriteNumber);
// and then you need to do your calculations, like adding something with the number here :)
```

For example, my program runs like this:

```
% node hw_ex01b.js
What's your name? Moritz
What's your favorite number? 7
Hello, Moritz, welcome to my program!
Thanks for letting me know your favorite number.
Your favorite number is: 7
If we double it, we get: 14.
If we add three, we get: 10.
If you do both, you'll get: 17.
Or the other way around (add, then double): 20.
```

Now try it yourself!

Another hint: You might need to use parentheses to prevent type conversion. For example `console.log("Some text " + favoriteNumber + 3)` does something else than `console.log("Some text " + (favoriteNumber + 3))`

## Exercise 2: Printing a Car to your terminal

Choose an Ascii art from the website https://www.asciiart.eu/.<br />
Output it to the **_console_**.

For example a [car](https://www.asciiart.eu/vehicles/cars):

```
￼       _______
       //  ||\ \
 _____//___||_\ \___
 )  _          _    \
 |_/ \________/ \___|
___\_/________\_/______
```

So when you run you program like this: `node hw_ex02.js`, you should see the corresponding output.

### Hints

0. This is not a complicated exercise, don't overthink it :) The idea is to teach you about a concept called "whitespace" in strings.
1. What happens if you add spaces to your string to print, such as `console.log("   spaced      out     ")`
2. With your knowledge it's easiest to solve this exercise by calling console.log multiple times.
3. Advanced approach: It's possible to do it in one line of code (but tricky to get the alignment right) by using something called a newline character.
4. _Alternative_ solution that requires extra knowledge: Do some research about Template Literals in JavaScript.
