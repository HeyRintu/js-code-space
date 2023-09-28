


if(true){
    var a = 300
    let b = 400
    let c = 12
    const d = 43

    // console.log(`value of c - ${c} & value of d - ${d} & value of a - ${a}`);
}


// console.log(a);
// console.log(b);
// console.log(c);
// console.log(d);


function parents() {
    let name = "bigDaddy"
    // console.log(name);
    // console.log(childName); not defined because childname is inside child functin

    function child() {
        let childName = "lilBro"
        console.log(`parents is ${name} and child is ${childName}`);
    }
    child()
}


// parents()


if (true) {
    const firstName = "jay"
    if (firstName === "jay") {
        const secondName = "ray"

        // console.log(firstName + " " + secondName);
    }
    // console.log(secondName);
}

console.log(addNum(68));

function addNum(num) {
    return num + 1
}


//  code give error (Cannot access 'addTwo' before initialization) --------- Function expressions are not hoisted like function declarations, so they need to be defined before you use them. 
// addTwo(5)
const addTwo = function(num){
    return num + 2
}
