// Immediatedly Invoked Function Expressions (IIFE)

(function chai(){
    console.log(`DB CONNECTED`);
})();

// Pollution due to global scope and to remove variable declared in 
// GLobal scope ,brought out IIFE method
// (function is defined here.)(execution call.)

((name) => {
    console.log(`DB Conneted Two ${name}`)
})('Aditya');

