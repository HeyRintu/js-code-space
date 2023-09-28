const steam_acc  = {}

steam_acc.userID = "heyRintu"
steam_acc.name = "Rintu"
steam_acc.games = ["valo", "apex"]
steam_acc.isPlaying = false

// console.log(steam_acc);


const myGames = {
    UserId : "heyRintu",
    games : {
            valoRant : {
                    ranks : "dimonds",
                    playtime : 1000
                },
            apex : {
                    ranks : "gold",
                    playtime : 1500
                }
    }
}

// console.log(myGames.games.valoRant.ranks);
// console.log(myGames.games.apex.playtime);

const obj1 = {1:"a", 2:'b'}
const obj2 = {3:"c", 4:"d"}
const obj3 = {5:"e", 6:'f'}

const obj4 = {obj1, obj2}
// console.log(obj4);

const obj5 = Object.assign({}, obj1, obj2, obj3)
// console.log(obj5);

const obj6 = {...obj1, ...obj2, ...obj3}
// console.log(obj6);


const GamePrices = [
    {
        gameName : "apex",
        cost : 9999
    },
    {
        gameName : "Valorant",
        cost : 431
    },
    {
        gameName : "fortnite",
        cost : 451
    }
]

// console.log(GamePrices[2].cost);





// console.log(Object.keys(obj6));
// console.log(Object.values(obj6));
// console.log(Object.entries(obj6)); // return an array in [key:value]



const Steam = {
    gameName : "cs2",
    price : 1200,
    developedBy : "valve"
}


// de-structuring 

const {developedBy : dev} = Steam

console.log(dev);
console.log(Steam.developedBy);
console.log(Steam["developedBy"]);



// JSON format



// {
//     "name" : "rintu,"
//     "age" : "24",
//     "location": "kolkata"
// }


[
    {},
    {},
    {}
]

