
const user = {
    username : "fairyHunter",
    playhour : 999,

    welcome : function() {
        console.log(`${this.username}, welcome to website`);
        console.log(this);
    }
}

// console.log(user.welcome());


// console.log(this);


// function chai() {
//     let name = "fairyHunter"
//     console.log(this.name);
// }

// console.log(chai())


// function chai() {
//     let name = "fairyHunter";
//     return name
// }

// console.log(chai())


// let chai = function() {
//     let name = "fairyHunter"
//     return name
// }

// console.log(chai());


// let chai = () => {
//     let name = "fairyHunter"
//     return name
// }


// console.log(chai());


let name = "fairyhunter";
let chai = () => name;
console.log(chai());

let addNum = (a, b) => a + b

console.log(addNum(1,4));
