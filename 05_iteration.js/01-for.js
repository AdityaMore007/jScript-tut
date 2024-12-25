// for loop 

for (let i = 0; i < 10; i++) {
  const element = i;
  // console.log(element);
  if (element == 5){
    // console.log("5 is the Number.");
  }
  // console.log(element);
  
}

for (let i = 1; i <= 10; i++) {
  // console.log(`Outer loop value: ${i}`);
  // console.log(`\nThe table for ${i}`);
  
  for (let j = 1; j <= 10; j++) {
    // console.log(`Inner loop value ${j} and Outer loop value ${i}`);
    // console.log(`${i} X ${j} == ${i*j}`)
    // console.log(i + '*' + j + ' = ' + i*j); 
  }
}

let myArray = ["flash","batman","superman"]
console.log(myArray.length);

for (let index = 0; index <= myArray.length; index++) {
  const element = myArray[index];
  console.log(element);
  
}

