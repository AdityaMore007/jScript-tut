// const tinderUser = new Object() --> this is a singleton object
const tinderUser = {}

// tinderUser.id = "123abc"
// tinderUser.name = "Sammy"
// tinderUser.isLoggedIn = false

// // console.log(tinderUser);

// const regularUser = {
//     email : "some@gmail.com",
//     fullname : {
//         userFullname :{
//         firstname : "Aditya",
//         middlename : "Bharat",
//         lastname : "More"
//         }
//     }
// }

// // console.log(regularUser.fullname.userFullname);

// const obj1 = {
//     1 : "a",
//     2 : "b"
// }
// const obj2 = {
//     3 : "a",
//     4 : "b"
// }

// // const obj3 = {obj1,obj2}
// // const obj3 = Object.assign({}, obj1, obj2)
// // It combines both the objects and gives us one single object

// // Here, single bracket is given coz obj1 and obj2 gets 
// // merged in empty string...so as it doesn't gets merged
// // in obj1. 

// const obj3 = {...obj1, ...obj2}
// // console.log(obj3);

// const users = [
//     {
//         id : 1,
//         email : "H@google.com"
//     },
//     {
//         id : 2,
//         email : "H@microsoft.com"
//     },
//     {
//         id : 3,
//         email : "f@chatgpt.com"
//     }
// ]

// users[1].email 
// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// // it converts into ARRAY
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('isLogged'));

const course = {
    coursename : "js in hindi",
    price : "999",
    courseInstructor : "Aditya"
}

// course.courseInstructor
const {courseInstructor : instructor} = course
// console.log(courseInstructor);
console.log(instructor);
 
// {
//     "name" : "Hitesh",
//     "coursename" : "JS in Hindi",
//     "price" : "free"
// } 

[
    {},
    {},
    {}
]





