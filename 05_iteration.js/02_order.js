const arr = [1, 2, 3, 4, 5, 6]

// for(const iterator of object){

// }

for (const num of arr) {
    // console.log(num);

}

const greetings = "hello world"

for (const greet of greetings) {
    // console.log(greet);

}

// Maps 

const map = new Map()
map.set('IN', "India")
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('FR', "France")

// console.log(map);

for (const [key, value] of map) {
    // console.log(key,':-',value);

}

// here for 'for In Loop' variable map is not iterable.
for (const key in map) {

    console.log(key)
}


