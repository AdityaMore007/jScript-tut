const user = {
    username : "Hitesh",
    price : 999,

    welcomeMessage: function(){
        console.log(`${this.username} ,welcome to website`);
        console.log(this);
        
    }
}

// user.welcomeMessage()
// user.username = "Aditya"
// user.welcomeMessage()
// console.log(this);


// function chai(){
//     let username = "Aditya"
//     console.log(this.username);
    
// }
// chai()

// const chai = function() {
//         let username = "Aditya"
//         console.log(this.username);
        
// }

// chai()

// const chai = () => {
//     let username = "Aditya"
//     console.log(this)
// }

// chai()

// THIS IS AN ARROW FUNCTION.ALSO CALLED AS EXPLICIT FUNCTION.

// const addtwo = (num1,num2) => {
//     return num1+num2
// }

// console.log(addtwo(4,5))


// THIS IS AN IMPLICIT FUNCTION.
const addtwo = (num1,num2) => ({username : "Aradhya"})


console.log(addtwo(4,5))