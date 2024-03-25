let ages = [21, 12, 16, 34, 18, 21, 22, 15, 25, 30];

let under18 = 0;
let over18 = 0;
let legalAge = 18;

for (let i = 0; i < ages.length; i++) {
    console.log("What is the value of i? " + i);
    if (ages[i] < legalAge) {
        under18++;
        console.log("Current underage count:" + under18);
    } else {
        over18++;
    }
}

console.log("There are " + under18 + " ages under 18.");
