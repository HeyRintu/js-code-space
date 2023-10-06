// for in

const obj = {
    j: "javaScript",
    p: "python",
    r: "ruby",
};  

for (let key in obj) {
    // console.log(key);
    // console.log(obj[key]);
    // console.log(key, obj[key]);
}


let myString = "Hello, World!";
for (let char in myString) {
    // console.log(myString[char]);
}

let myArr = ['js', 'py', 'rb', 'go'];

for (let index in myArr) {
    // console.log(index);
    // console.log(myArr[index]);
    // console.log(index, myArr[index]);
}


const myMap = new Map();

myMap.set('javascript', 'js');
myMap.set('python', 'py');
myMap.set('ruby', 'rb');
myMap.set('go', 'go');

// console.log(myMap);
// for in loops don't work with Maps
for (let key of myMap) {
    console.log(key);
    // console.log(myMap[key]);
    // console.log(key, myMap[key]);
}