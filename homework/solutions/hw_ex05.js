let readlineSync = require("readline-sync");

// On the top, we configure the correct daily rate
// Usually you would load this from a database or something.
const conversionRateGHS = 13.7;

// Ask the user for which currency they want to convert from?
let currencyChoice = readlineSync.question(
    "Do you want to convert EUR or GHS? "
);

if (currencyChoice == "EUR") {
    // 1. ask user for the amount in Euros
    let amountEUR = readlineSync.questionFloat(
        "What's the amount (EUR) that you want to convert? "
    );

    // 2. calculate the amount in GHS
    let amountGHS = amountEUR * conversionRateGHS;

    // 3. print the result to the user
    console.log("You would get " + amountGHS.toFixed(2) + " GHS for that.");
} else if (currencyChoice == "GHS") {
    // 1. ask user for the amount in Ghanaian cedi
    let amountGHS = readlineSync.questionFloat(
        "What's the amount (GHS) that you want to convert? "
    );

    // 2. calculate the amount in EUR
    let amountEUR = amountGHS / conversionRateGHS;

    // 3. print the result to the user
    console.log("You would get " + amountEUR.toFixed(2) + " EUR for that.");
} else {
    console.log(
        "Invalid input. Please start again and either choose 'EUR' or 'GHS'."
    );
}
