const prompt=require('prompt-sync')();

const base=parseFloat(prompt('Enter base value: '));
const height=parseFloat(prompt('Enter height value: '));

const area=base*height/2;

console.log(`Area of Triangle is ${area}`);