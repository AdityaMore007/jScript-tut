const marvel_heros = ["Thor","IronMan","SpiderMan"]
// const dc_heros = ["SuperMan","Flash","Batman"]

// marvel_heros.push(dc_heros)
// console.log(marvel_heros)
// console.log(marvel_heros[3][1]);

// const heros = marvel_heros.concat(dc_heros)
// console.log(heros);

// const all_new_heros = [...dc_heros,...marvel_heros]
// console.log(all_new_heros);


// const another_array = [1, 2, 3,[4, 5, 6], 7, [6, 7, [4, 5]]]

// const real_another_array = another_array.flat(Infinity)
// flat() : it concatenates into single array i.e it removes
// all square brackets and creates single array list.

// console.log(real_another_array);

console.log(Array.isArray(marvel_heros));
console.log(Array.from("Hitesh"));
console.log(Array.from({name : "Aditya"}));
// here, it can't convert key:value pairs into Array.it always
// gives us Empty String.









