const prompt=require('prompt-sync')();

let num1=prompt('Enter First Number');
let num2=prompt('Enter second number')

let temp;

temp=num1;
num1=num2;
num2=temp;

console.log(`The value of num1 after swap=${num1}`);
console.log(`The value of num2 after swap=${num2}`);

