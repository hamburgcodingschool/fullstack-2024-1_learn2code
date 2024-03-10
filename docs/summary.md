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

## Day 4 – 2024-03-13

## Day 5 – 2024-03-15

## Day 6 – 2024-03-18

## Day 7 – 2024-03-20

## Day 8 – 2024-03-22
