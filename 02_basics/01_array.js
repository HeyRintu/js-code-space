//array

const myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];

console.log(myArray);

const newArry = new Array(1, 2, 3, 4, 5, 6, 7, 8, 9);

console.log(newArry);

// +++++++++++++++++++++++++ array methods +++++++++++++++++++++++++++++


// toString() method  

console.log(myArray.toString());

// length method  

console.log(myArray.length);

// join method

console.log(myArray.join(' '));

// pop method -- modify the original array

let mypopArray = myArray
console.log(mypopArray.pop());
console.log(mypopArray)

// push method -- modify the original array

let mypushArray = myArray
console.log(mypushArray.push(10));
console.log(mypushArray)

// shift method -- modify the original array

let myshiftArray = myArray
console.log(myshiftArray.shift());
console.log(myshiftArray)

// unshift method -- modify the original array

let myunshiftArray = myArray
console.log(myunshiftArray.unshift(0));
console.log(myunshiftArray)

// delete method -- modify the original array

let mydeleteArray = myArray
console.log(delete mydeleteArray[0]);
console.log(mydeleteArray)

// splice method -- modify the original array

let myspliceArray = myArray
console.log(myspliceArray.splice(0, 1));
console.log(myspliceArray)
