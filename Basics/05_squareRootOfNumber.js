const prompt=require('prompt-sync')();

const number=parseInt(prompt('Enter Number'));

const res=Math.sqrt(number)

console.log(`Sqr of ${number} is ${res}`);
