const prompt=require('prompt-sync')();

const celsius=prompt('Enter value of celsius=');

const fahrenheit=(celsius*1.8)+32;

console.log(`${celsius} degree is equal to ${fahrenheit} degree fahrenheit`);

