/* 
primitive data type:
7 types : string , Number , Boolean, Null, undefined,
symbol,BigInt

reference (Non Primitive):
Array, Objects , Functions 
*/

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

const bigNumber = 23651656846846816n
console.log(bigNumber,typeof(bigNumber));

const heros = ["shaktiman","naagraj","doga"]

let MyObj = {
    name:"hitesh",
    age: 24,
    place:"Mumbai"
}

const MyFunction = function(){
    console.log("hello world");
    
}
console.log(typeof MyFunction);


/*
types of values and its result:
Undefined = "Undefined"
Null = "Object"
Boolean = "Boolean"
Number = "Number"
String = "String"
Object = "object"

*/
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Stack(Primitive) --> we get the refernce/copy of the value[here values doesn't get changed unless we make it. ]
// Heap(Non primitive)--> here, we get refernce to that object[values can be changed.]

const userOne = {
    email : "Aditya@google.com",
    upi:"Adimore56@ybl"
}

let userTwo = userOne
console.log(userTwo);

userOne.email = "AdityaMore@yahoo.com"

console.log(userOne.email);
console.log(userTwo.email);

