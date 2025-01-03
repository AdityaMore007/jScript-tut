// 'for...in' works with objects: It iterates over the enumerable properties (keys) of an object. But it doesn't work directly with Map.

// 'for...of' works with iterables: It works with iterable objects like arrays, Map, Set, etc., to iterate over values. However, plain objects are not iterable directly, so for...of doesn't work with them. To iterate over an object's properties, you would need to use Object.keys(), Object.values(), or Object.entries().


const coding = ["js", "ruby", "python", "java", "cpp"]

// coding.forEach(function (item) {
//   console.log(item);

// })

// coding.forEach((item) => {
  // console.log(item);

// })

// console.log(coding.map((coding) => coding.length));

// const materials = ['Hydrogen', 'Helium', 'Lithium', 'Beryllium'];

// console.log(materials.map((material) => material.length));
// // Expected output: Array [8, 6, 7, 9]


// function printMe(item){
//   console.log(item);
// }

// coding.forEach(printMe)


// coding.forEach((item,index,arr) => {
//   console.log(item,index,arr);

// })

const myCoding = [
  {
    languageName: "javaScript",
    languageFileName: "js"
  },
  {
    languageName: "python",
    languageFileName: "py"
  },
  {
    languageName: "java",
    languageFileName: "java"
  }
]

myCoding.forEach((val) => {
  console.log(val.languageName);
})
