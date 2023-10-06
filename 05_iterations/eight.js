
// reduce 

const myArray = [1, 2, 3, 4, 5];

const initialValue = 0;

const sum = myArray.reduce( (accumulator, currentValue) => {
    return accumulator + currentValue;
}, initialValue);

// console.log(sum);


const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]


const total = shoppingCart.reduce( (acc, curr) => {
    return acc + curr.price;
}, 0);

console.log(total);