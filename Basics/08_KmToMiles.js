const prompt=require('prompt-sync')();

const kilometer=prompt('Enter Km= ');

const factor=0.621371;

const miles=kilometer*factor;

console.log(`${kilometer} Km is equal to ${miles} miles `);