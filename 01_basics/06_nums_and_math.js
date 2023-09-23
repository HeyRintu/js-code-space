const score = 10000;
console.log(score);

const myNum = new Number(100);
console.log(myNum);

console.log(typeof myNum);
console.log(typeof score);

console.log(myNum.toString().length);

console.log(myNum.toFixed(2));


//+++++++++++++++++++++++++++++++++++++++ Math Object ++++++++++++++++++++++++++++++++++++++++++++++++++++++++

console.log(Math);
console.log(Math.PI);
console.log(Math.E);
console.log(Math.round(2.4));
console.log(Math.abs(-2.4));
console.log(Math.ceil(2.4));
console.log(Math.floor(2.4));
console.log(Math.sqrt(2.4));
console.log(Math.pow(2, 4));
console.log(Math.min(2, 4, 5, 6, 7, 8, 9));
console.log(Math.max(2, 4, 5, 6, 7, 8, 9));

console.log(Math.random());


const min = 15;
const max = 50;

console.log(Math.floor(Math.random() * (max - min + 1)) + min);