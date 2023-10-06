
// for of 

const names = ['Alice', 'Bob', 'Charlie'];

for (const name of names) {
    // console.log(name);
}

const myString = 'Hello, World!';

// for (const char of myString) console.log(char);


const myObj = {
    name : "Alice",
    age : 25,
    city : "Paris"


}

for (const key in myObj) {
    // console.log(key);
    // console.log(myObj[key]);
    // console.log(key, myObj[key]);
    
}   

//Maps

const myMap = new Map();

myMap.set('name', 'Alice');

myMap.set('age', 25);

myMap.set('city', 'Paris');

// console.log(myMap);


console.log(myMap.get('name'));

console.log(myMap.size);

console.log(myMap.delete('age'));

// console.log(myMap);

