const prompt=require('prompt-sync')();

const number=parseInt(prompt('Enter Number= '));

if(number>0){
    console.log(`Number is positive`);
}
else if(number==0){
    console.log(`Number is zero`);
}
else{
    console.log(`Number is Negetive`);
}