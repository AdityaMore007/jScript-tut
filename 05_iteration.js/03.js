const myObject = {
  js:"JavaScript",
  cpp : "C++",
  rb : "Ruby",
  Swift :"Swift by Apple."
}

for (const key in myObject){
  // console.log(`${key} shortcut is for ${myObject[key]}`); 
}

const programming = ["js","rb","py","java","cpp"]

for (const key in programming) {
  console.log(key);
  
  // console.log(programming[key]);
  
}