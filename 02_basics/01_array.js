//array

const myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// console.log(myArray);

const newArry = new Array(1, 2, 3, 4, 5, 6, 7, 8, 9);

// console.log(newArry);

// +++++++++++++++++++++++++ array methods +++++++++++++++++++++++++++++


// toString() method  

// console.log(myArray.toString());

// length method  

// console.log(myArray.length);

// // join method

// console.log(myArray.join(' '));

// // pop method -- modify the original array - remove last element

// let myPopArray = myArray
// console.log(myPopArray.pop());
// console.log(myPopArray)

// // push method -- modify the original array  - add new element at end of the array

// let mypushArray = myArray
// console.log(mypushArray.push(10));
// console.log(mypushArray)

// // shift method -- modify the original array - remove first element from array

// let myshiftArray = myArray
// console.log(myshiftArray.shift());
// console.log(myshiftArray)

// // unshift method -- modify the original array - add elements at beginning 

// let myunshiftArray = myArray
// console.log(myunshiftArray.unshift(0));
// console.log(myunshiftArray)

// // delete method -- modify the original array

// let mydeleteArray = myArray
// console.log(delete mydeleteArray[0]);
// console.log(mydeleteArray)

// // splice method -- modify the original array -- remove element and add new (index, remove_count, new_items)

// let myspliceArray = myArray
// console.log(myspliceArray.splice(0, 2, 69 , 85));
// console.log(myspliceArray)


// const exArray = [1, 23, 45, 234]
// console.log(exArray.length);

// exArray[exArray.length] = 32

// console.log(exArray);


const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
const citrus = fruits.slice(1);

console.log(citrus);