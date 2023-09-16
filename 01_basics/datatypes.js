// stack(primitive), heap(reference or non-primitive)


let nameOne = "John";

let nameTwo = nameOne;

nameTwo = "jackson";

console.log(nameOne, nameTwo); //John jackson


let personOne = {
    email : "abc@xyz.com",
    password : 123456
}

let personTwo = personOne;

personTwo.password = 654321;

console.log(personTwo.password, personOne.password); //654321 654321