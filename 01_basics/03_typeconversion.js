//type conversion

let val = 5;

console.log(typeof val); //number

let val2 = String(5);

console.log(typeof val2); //string

let val3 = Boolean(5);

console.log(typeof val3); //boolean

let val4 = Number("5");

console.log(typeof val4); //number

let val5 = Number("hello");

console.log(typeof val5); //number NaN

let val6 = Number(true);

console.log(typeof val6); //number 1

let val7 = Number(false);

console.log(typeof val7); //number 0

let val8 = Number(null);

console.log(typeof val8); //number 0

let val9 = Number(undefined);

console.log(typeof val9); //number NaN
