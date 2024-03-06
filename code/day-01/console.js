// *** numbers ***
1
1.5
1, 3 // oops, this is not working as expected.
0, 1.3 // (the comma is there to separate expressions: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Comma_operator)
    // you don't really need this
1 + 2
// exercise: calculate the number of minutes per year
60 * 24 * 365
// exercise: calculate how many 
0 / 0
Infinity

// *** strings ***//
hello // produces an error 
"hello" // we have to quote strings
"multiple words here"
'also single quotes possible' // it makes sense to stick with either single or double quotes in your project
"i can also " + "add multiple strings" // here the `+` operator concatenates!
// "what if I do not finish it correctly? 

// *** comments ***
// => very important to have! =)

// *** function calls ***
console.log("hey there, I'm a function call that prints this text")
alert("I can open a dialogue, yay!")
prompt("What's your favourite question to ask?")
Math.random() // produces a number between 0 and 1 (not included)
Math.floor(1.5)
Math.ceil(1.5)
Math.round(1.5)
Math.round(1.4)
// exercise: produce a number between 1 and 6
Math.floor(Math.random()*6) + 1
Math.cos(0)
Math.PI // note: this is not a function call, but a constant!
Math.cos(Math.PI)

// *** booleans ***
true
false
!true // "not" / negation

// *** typeof operator ***
typeof 1
typeof "test"
typeof Math
typeof test
typeof Infinity
typeof NaN

// *** arrays ****
[ 1, 2, 3, 4, 5]

// *** objects (where JSON is a subset) ***
