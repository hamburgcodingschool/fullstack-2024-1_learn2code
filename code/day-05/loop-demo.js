let i = 10;

// exercise: change the loop condition,
// such that the loop runs
// for only 50 times
////// vvvvvv is the loop condition.
while (i > 0) {
    // console.log("i <= 10 is: " + (i <= 10));
    // exercise: change the output, such
    // that it's counting downwards instead
    // (10, 9, 8, ..., 0)
    console.log("i: " + i);
    console.log("not gonna stop for " + i);
    i -= 1;
}

console.log("i <= 10 is: " + (i <= 10));

// this will always happen
console.log("finished.");

// write a loop that counts upwards to 20,
// but in steps of 2. Like:
// 0, 2, 4, 6, ..., 20
