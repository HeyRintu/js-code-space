
// select body

const body = document.querySelector('body');

// select button

const buttons = document.querySelectorAll('button');

buttons.forEach((button) => {
    console.log(button);
    button.addEventListener('click', (event) => {
    console.log(event);
    console.log(event.target);
    if(event.target.id === "grey"){
        body.style.backgroundColor = event.target.id
    }


    })
})