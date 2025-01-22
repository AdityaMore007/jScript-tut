const promiseOne = new Promise(function(resolve,reject){
    // do async task.
    // DB Calls , cryptography
    setTimeout(function(){
        console.log("Async task is Complete!!");
        resolve()
    },1000)
})

promiseOne.then(function(){
    console.log("Promise consumed!!");
})

new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("Async Task 2");
        resolve()
    },1000)
}).then(function(){
    console.log("Async 2 resolved!!!");
})

const promiseThree = new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({username:"Aditya" , email:"aditya@gmail.com"})
    },1000)
})

promiseThree.then(function(user){
    console.log(user);
    
})