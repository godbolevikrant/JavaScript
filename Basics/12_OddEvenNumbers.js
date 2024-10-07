const prompt = require("prompt-sync")();

const number = prompt("Enter Number= ");

// if (number % 2 == 0) console.log(`The Number is Even`);
// else console.log(`The Number is Odd`);


//using ternary operator
const res=(number%2==0)?"Even":"Odd";
console.log(`The number is ${res}`);

