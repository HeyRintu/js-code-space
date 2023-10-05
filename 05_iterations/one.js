
// for

for (let i = 0; i < 20; i++) {
    
    // if(i % 2 !== 0) console.log(i);
}


for(let i = 0; i < 10; i++){

    // console.log(`this is outer loop ${i}`);
    for (let j = 0; j < 10; j++) {
        // console.log(`this is inner loop ${j}`);
        
    }
}


let myArr = [1,2,3,4,5,6,7,8,9,10];

for (let i = 0; i < myArr.length; i++) {
    // console.log(myArr[i]);
    
}

//break and continue


for (let i = 0; i < myArr.length; i++) {
    if(i === 5){
        break;
    }
    // console.log(myArr[i]);
    
}


for (let index = 1; index <= 20; index++) {
    if (index == 5) {
        // console.log(`Detected 5`);
        continue
    }
    // console.log(`Value of i is ${index}`);
    
}