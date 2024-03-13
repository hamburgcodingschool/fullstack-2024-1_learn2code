# Summary

Here you find some keywords of things we have discussed or worked on.
These summaries are not meant to be comprehensive, and it will probably only make sense to you if you have attended the session.

## Day 1 – 2024-03-06

-   Get to know each other
-   Intro to JavaScript by using the browser console (developer tools)
    -   our first expressions
    -   data types
    -   operators
    -   error messages
-   Difference between JS and HTML/CSS
    -   "what is a programming language?"
    -   JS is computed line by line
    -   different kinds of keywords
-   Difference between Frontend and Backend JavaScript
-   Overview of the module
    -   Elements JavaScript (or any imperative/procedural programming language)
        -   data types
        -   operators
            -   mathematical
            -   assignment
            -   logical
        -   variables
        -   conditions (if ... else)
        -   loops (while, for)
        -   functions
    -   Problem Solving Skills and Coding Principles
        -   divide and conquer
        -   debugging & reading/understanding code
            -   print debugging
            -   test-driven approach
    -   Coding Enviroment
        -   nodejs
        -   VS Code

### Resources

-   To repeat and go deeper, have a look at EloquentJS [Chapter 1](https://eloquentjavascript.net/01_values.html)
-   A very different approach to learning JS, but in my opinion still interesting would be [The Coding Train](https://www.youtube.com/playlist?list=PLRqwX-V7Uu6Zy51Q-x9tMWIv9cueOFTFA)
    -   if you have the capacity
    -   if you maybe like to have things moving visually
    -   this is totally optional, but I thought I'd refer you to it.

## Day 2 – 2024-03-08

-   Repeating concepts from last time
    -   What data types do you remember?
    -   How do you open a dialogue/popup?
    -   How do you ask a user for input?
    -   How do you round a number down / up?
    -   Was everybody able to access the github repository?
-   A bit of new stuff, but still with the sense of repeating the concept of chaining operations and function calls.
    -   Exercise: Calculate the length of a string
    -   Demo time. MDN as a resource for JavaScript knowledge/documentation (similarly: HTML & CSS)
        -   https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference
    -   Exercise: Build a dialogue that asks for the name and returns the length of the name (i.e. how many letters)
        -   solution: `alert("Your name has " + prompt("What's your name?").length + " letters")`.
        -   This exercise is meant to show you,
            that we _already_ can combine multiple things to an expression that already makes something more or less useful.
            (even though we're just getting started :D)
-   Setting up your nodejs Environment
    -   Download NodeJS from https://nodejs.org/en/download
-   introduction to using the commandline terminal in VS Code
    -   When you start your Terminal in VSCode, you'll get something called a _Shell_.
        -   For Windows that's the PowerShell, for MacOS the default is zsh (pronounced "Seashell". Seriously! :D)
    -   Make sure you are aware of the difference whether you're _inside_ the nodejs terminal or whether you're "outside" in the Shell.
-   prompt/console vs file-based JavaScript
    -   We have started with the built-in browser console (Developer Tools)
    -   We can also use the nodejs console / prompt
    -   Lastly, what we'll from now on mainly use,
        is writing JS to a file and running it with `node <filename>`.
-   Difference between the Browser JavaScript and NodeJS
    -   NodeJS doesn't have things like `alert` and `prompt`, because it doesn't have the concept of a Window.
    -   If you want to communicate with the user, we'll have to load and use a package
        -   There are different options, but we'll mainly use `readline-sync` in this course.
-   Introduction to variables
    -   Three ways to initiate a variable: `let`, `const`, `var`. We mostly want to use `let`
    -   JS is a bit weird, because it gives you some freedom which can later hurt you.
        -   Example: you don't _have_ to use `let`/`const`/`var` to create a variable, but the behavior changes in subtle ways. It's recommended to use these keywords!
    -   There are different metaphors for a variable: "a box" or "a tentacle"
        -   Check EloquentJS Chapter 2: "You should imagine bindings as tentacles rather than boxes. [...]"
-   Boolean Operators
-   Homework
    -   To repeat and go deeper, have a look at EloquentJS [Chapter 2](https://eloquentjavascript.net/02_program_structure.html)
    -   Work on the [Homework Exercises](../homework/basics.md).

## Day 3 – 2024-03-11

-   Repetition from last time: NodeJS in VSCode

    -   the terminal program that is configured for your system let's you start `node`
    -   you can exit `node` by typing `.exit`, but this doesn't work for the terminal program itself ("Command not found" or something similar)
    -   you can not run `node` inside `node` (`Uncaught ReferenceError: node is not defined`)
    -   run `node` followed by a filename to run a script, e.g. `node hello.js`
    -   how folders and directories are the same thing with a different name
    -   in the terminal, `pwd` shows you where you are and `ls` shows you what files are there.
        -   `pwd` stands for "print working directory"
        -   `ls` stands for "list files"
    -   why terminal is named terminal
    -   in `node` we don't have `prompt` available (why? most don't need it in the backend!)
    -   using `npm` to install a package called [readline-sync](https://www.npmjs.com/package/readline-sync)

-   exercise: Write a currency converter. It should ask the user for a number (euros) and compute the resulting amount for a currency of your choice

    -   converting the user input into a number
        -   option 1: using the [`Number` constructor](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/Number)
        -   option 2: ask the user for a float in the first place, with `readlinesync.questionFloat`.
    -   store that into a variable and calculate the output
    -   example of how to make code nicer
        -   by going "step by step" and use "speaking variable names" in each of the steps

-   more about Variables
    -   changing a variable throughout the code
    -   assignment operators (`+=`, `*=`, ...)
-   exercise: fill out [this code](../code/day-03/variables-exercise.js) such that it works correctly!
    -   solution can be found [here](../code/day-03/variables-exercise-solution.js).
-   get to know the boolean data type better and apply that using conditional logic statements (`if`/`else`)
    -   operators that deal with booleans
        -   comparison operators
        -   logical operators
            -   binary vs unary
    -   how the `if` statement looks like
-   exercise: Ask the user for a year and tell them whether it is a leap year or not

## Day 4 – 2024-03-13

-   review of the homework
-   more about the if statement
    -   these if statements can be nested!
    -   Transforming your code into a logical flow-diagram
        -   How to draw multiple if statements in such a diagram?
        -   see my [notes](./notes.pdf) for a few badly drawn illustrations :D
-   how to approach a coding problem (of course only Moritz' perspective and ideas)
    -   think about it
        -   Does the requirements/question make sense to you? If not, can you formulate a question?
        -   How would you solve the problem without a computer?
        -   How would you expect the program to look like? (Have you seen similar programs before?)
        -   Which programming elements might you need in your approach?
    -   try it
        -   trying is about taking and testing tiny steps towards the solution
        -   do the elements that you were considering in the previous step actually work?
            -   use the console / interpreter / whatever before building the whole thing!
    -   solve it
        -   this step is to write down a working solution. It doesn't need to be "nice".
    -   review it
        -   now it's for making it nicer. Can you make your code more understandable/readable?
        -   do you understand why it works? Sometimes you get a lucky shot. What do you still find confusing?
-   short circuiting boolean operator
    -   example [here](../code/day-04/short_circuit.js)
    -   see [eloquentjs](https://eloquentjavascript.net/01_values.html#i-3jN0iK4yKW) for a detailed explanation
-   [preview](../code/day-04/password_with_loops.js) of the `while` loop, more on that on day 5.

## Day 5 – 2024-03-15

## Day 6 – 2024-03-18

## Day 7 – 2024-03-20

## Day 8 – 2024-03-22
