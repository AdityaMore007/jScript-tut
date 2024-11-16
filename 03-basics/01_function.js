// function sayMyName(){
//     console.log("A");
//     console.log("D");
//     console.log("I");
//     console.log("T");
//     console.log("Y");
//     console.log("A");
// }
// Here, the function is represented as above structure.

// sayMyName()

// function addTwonumber(num1,num2){
//     num3 = num1 + num2 
//     console.log(num3);
    
// }

// function addTwonumber(num1,num2){
//     // let num3 = num1 + num2 
//     // return num3; 
//     return num1 + num2
// }

// // here num1 and num2 are the parameters passed in 
// // the function.

// // addTwonumber(5,5)
// // when we call the function,we pass the Arguments inside
// // the called function. 
// // const result = addTwonumber(5,6)
// // console.log("Result: ", result);

// function loginUsermessage(username = "sam"){
//     if(!username){
//         console.log("Please Enter the username");
//         return 
        
//     }
//     return `${username} just logged in`
// }
// // const result1 = loginUsermessage("Aditya")
// // console.log(result1);

// console.log(loginUsermessage("Aditya"));






// ***************** FUNCTIONS ********************

// ...parameter --> Rest operator or Spread operator

function calculateCartPrice(val1,val2,...num1){
    return num1
}

// console.log(calculateCartPrice(200, 400, 500, 600, 650));

const user = {
    username : "Aditya",
    Price : 199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and the price is ${anyobject.Price}`);
    
}

// handleObject(user)
handleObject({
    username : "Aditya",
    Price : 500
})

const myNewarray = [200,400,500,100,600]

function returnSecondValue(getArray){
    return getArray[1]
}

console.log(returnSecondValue(myNewarray));
console.log(returnSecondValue([200,900,950,450]));
