//singleton


// let myObj = new Object;

// let myObj = Object.create

// console.log(myObj);
const mySym = Symbol("hey")

const newProfile = {
    name : "Fairy",
    "Real name" : "Rintu",
    age : 24,
    game : ["apex", "valorant"],
    [mySym] : "hello there"

}

// console.log(newProfile);
// console.log(newProfile.name);
// console.log(newProfile["name"]);
// console.log(newProfile["Real name"])
// console.log(newProfile[mySym]);


// newProfile.age = 43;
// Object.freeze(newProfile)
// newProfile.age = 3;
// console.log(newProfile);


newProfile.now_playing = function () {
    // console.log(`User is playing now ${this.game[0]}`); ----- this will give undefined in console
    return `User is playing now ${this.game[0]}`
}

// ***doesn't not work this in arrow function ....
// newProfile.now_playing = () => {
//     console.log(`User is playing now ${this.game[0]}`);
// }

console.log(newProfile.now_playing());


