let readlineSync = require("readline-sync");

// 1. ask user for the currency in Euros
let amountEUR = readlineSync.questionFloat(
    "What's the amount (EUR) that you want to convert? "
);

// 2. calculate the amount in dollars
const conversionRateGHS = 13.7;
let amountGHS = amountEUR * conversionRateGHS;

// 3. print the result to the user
console.log("You would get " + amountGHS + " GHS for that.");
