function greetings(name) {
    console.log(`Hello there, Mr.${name}`);
}
// greetings("Rintu")


function greetingsTwo(name) {
    return (`Hello there, Mr.${name}`);
}
// console.log(greetingsTwo("Rintu"))

function addNum(num1, num2) {
    // console.log(num1 + num2);
    return num1 + num2
}

const result = addNum(6,9)
// console.log(result);


let myFun = function(userID = "Sam"){
    if (userID === "") {
        return ` please enter your UserId `
    }
    else{
        return `Your userId is ${userID}`
    }
}

// console.log(myFun());



function calNum(num2,num3, ...num1){
    console.log(num2,num3);
    return num1
}


// console.log(calNum(1,2,4,454,75));

function totalNum(...nums) {
    let result = 0
    for (let i = 0; i <  nums.length; i++) {
        result +=  nums[i]
        
    }
    return result 
    
}

// console.log(totalNum(1,2,4));


let myObj = {
    name: "Rintu",
    age : 24
}
function handleObj(anyObj) {
    return (`my name is ${anyObj.name} and age is ${anyObj.age}`);
}

// console.log(handleObj(myObj));



const myArr = [1, 2, 3, 4]

function funArr(ArrElements) {

    return ArrElements[2]
    
}

console.log(funArr(myArr));
