const mySym = Symbol("key1")


const JsUser = {
    name: "Hitesh",
    "full_name" : "Aditya More",
    age : 18,
    [mySym] : "myKey1",
    location : "Jaipur",
    email : "Aditya@google.com",
    isLoggedIn : false,
    lastLoginDays : ["Monday","Saturday"]

}


// // here by default key:value is in form of 
// // "Key" : "Value"


// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser["full_name"]);
// console.log(JsUser.full_name);
// console.log(typeof(JsUser[mySym]));


JsUser.email = "Hitesh@gmail.com"
// Object.freeze(JsUser)
JsUser.email = "Hitesh@microsoft.com"
console.log(JsUser)

JsUser.greeting = function(){
    console.log("Hello Js User");
    
}
JsUser.greetingTwo = function(){
    console.log(`Hello Js User, ${this.name}`);
    
}
 
console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());    




