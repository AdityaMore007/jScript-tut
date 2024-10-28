// const score = 400
// console.log(score);
// // o/p: 400

// const balance = new Number(200)
// console.log(balance);
// // o/p : [Number : 200]  

// console.log(typeof (balance.toString()));
// // o/p : String
// console.log(balance.toFixed(2));
// // o/p : 200.00

const otherNumber = 123.49489
// console.log(otherNumber.toPrecision(4));
// o/p : 123.5

const hundred = 1000000
// console.log(hundred.toLocaleString('en-IN'));
// o/p : 10,00,000 
// when we give the string as toLocaleString then we
// get output as 1,000,000.

//  ******************** maths *********************

// console.log(Math);
// console.log(Math.abs(-4));
// // o/p : gives the Absolute value
// console.log(Math.round(4.6));
// console.log(Math.ceil(4.1));
// // o/p: gives us the top value 
// console.log(Math.floor(4.2));
// // o/p: gives us the floor like vlaue
// console.log(Math.min(2,3,5,9,4));


console.log(Math.random()*10);

const min = 10
const max = 20 

console.log(Math.floor(Math.random() * (max - min + 1)) + min)





