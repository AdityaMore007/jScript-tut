const userEmail = []

if (userEmail){
  // console.log("Got user Email");
}
else{
  console.log("Don't have user Email.");
  
}

/*
falsy values :
false,0,-0(negative zero),BigInt 0n,"",null,undefined,Nanx

Truthy values:
"0", 'false', " ", [], {}, function(){}
*/

if (userEmail.length === 0){
  console.log("Array is empty.");
  
}

const emptyObj = {}