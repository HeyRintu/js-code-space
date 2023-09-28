const odd_num = [1, 3, 5, 7, 9]
const even_num = [2, 4, 6, 8, 10]

// odd_num.push(even_num)

// console.log(odd_num);
// console.log(odd_num[5][2]);

//concat method
// const newNum = odd_num.concat(even_num)

// console.log(newNum);


// const newNum = [...odd_num, ...even_num]
// console.log(newNum);


//convert nested array to normal array


// const nestArray = [1, 2, 3, 5, [4, 6, 7, [6, 64]]]

// const normalArray = nestArray.flat(Infinity)

// console.log(normalArray);



console.log(Array.isArray("Rintu"))
console.log(Array.from("Rintu"))
console.log(Array.from({name: "Rintu"})) 

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));