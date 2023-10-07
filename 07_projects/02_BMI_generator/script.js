const form = document.querySelector("form")

form.addEventListener("submit", (event) => {
    event.preventDefault()
    const height = parseInt(document.querySelector("#height").value)
    const Weight = parseInt(document.querySelector("#weight").value)
    const myResult = document.querySelector("#results")

    if(height === '' || height < 0 || isNaN(height)){
        myResult.innerHTML = 'Please give a valid height'
    }
    else if(Weight === '' || Weight < 0 || isNaN(Weight)){
        myResult.innerHTML = 'Please give a valid Weight'
    }
    else {
        const bmi = (Weight / ((height*height)/10000)).toFixed(2)
        myResult.innerHTML = `<span>${bmi}</span>`
    }




})


