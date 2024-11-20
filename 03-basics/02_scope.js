// // var c = 300
// let a = 300
// if (true){
//     let a = 10
//     const b = 20
//     console.log("Inner: ",a); 
// }

// console.log(a);
// // console.log(b);
// // console.log(c);


// for (let i = 0; i < array.length; i++) {
//     const element = array[i];
    
// }


function one(){
    const username = "aditya"

    function two(){
        const website = "Youtube"
        console.log(username);
        
    }
    // console.log(website);
    // console.log(username)
    // two()
}

one()

if (true) {
    const username = "aditya"
    if (username == "aditya") {
        const website = "Youtube"
        // console.log(username + website);
        
    }
    // console.log(website);
    
}

// console.log(username)



//  **************************interesting*********************
addone(5);
function addone(num){
    return num + 1
}


addTwo(5)
const addTwo = function(num){
    return num + 2
}

// Here , this part is called as hoisting in javScript