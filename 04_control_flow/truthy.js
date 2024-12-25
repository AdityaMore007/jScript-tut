const userEmail = []

if (userEmail){
  // console.log("Got user Email");
}
else{
  console.log("Don't have user Email.");
  
}

/*
falsy values :
false,0,-0(negative zero),BigInt 0n,"",null,undefined,Nan

Truthy values:
"0", 'false', " ", [], {}, function(){}

**in console**

false == 0
-> True

false ==''
-> true

0 ==''
-> true

*/

if (userEmail.length === 0){
  // console.log("Array is empty.");
  
}

const emptyObj = {} 

if (Object.keys(emptyObj).length === 0) {
  // console.log("Object is Empty!!");
}

// Nullish Coalescing Operator (??) : null undefined

let val1;
// val1 = 5??10
// val1 = null ?? 12
// val1 = null ?? undefined
val1 = null ?? 12 ?? 40
// console.log(val1);


/* Terniary Operator.*/

// condition ? true : false

const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("Less than 80") : console.log("More than 80");






