const modal = document.querySelector(".modal-container")
// const btn = document.querySelector(".contact-btn")
const closeBtn = document.querySelector(".modal-btn")
const form = document.getElementById("form")
const firstName = document.getElementById("firstname")
const lastName = document.getElementById("lastname")
const phone = document.getElementById("telephone")
const email = document.getElementById("email")

form.addEventListener("submit", (e) => {
    e.preventDefault()
    // console.log('1')
    checkInputs()

})



function checkInputs() {
    const firstNameValue = firstName.value.trim()
    const lastNameValue = lastName.value.trim()
    const phoneValue = phone.value.trim()
    const emailValue = email.value.trim()

    //regex definations
    const regnames = /^[a-zA-Z]+[^0-9@!#%^&*()+{}]$/;
    const regemail = /[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9]+/;
    
    //lastName validation
    if (lastNameValue === "") {
        // console.log('2')
        errorFunction(lastName, "lastname cannot be empty")
    } else if (!regnames.test(lastNameValue)) {
        errorFunction(lastName, "Your family name is invalid. Please enter the correct last name")
    } else {
        successFunction(lastName)
    }


    //firstname validation
    if (firstNameValue === "") {
        // console.log('2')
        errorFunction(firstName, "Firstname cannot be empty")
    } else if (!regnames.test(firstNameValue)) {
        errorFunction(firstName, "Your first name is invalid. Please enter the correct first name")
    } else {
        successFunction(firstName)
    }

}




function errorFunction(formElement, message){
    // console.log('3')

    const parentFormElement = formElement.parentElement;
    const small = parentFormElement.querySelector('small')

    parentFormElement.className = 'form-control error'
    small.innerText = message 
}



function successFunction(formElement) {
    const parentFormElement = formElement.parentElement;
    parentFormElement.className = 'form-control success'
}
// btn.addEventListener('click', (e) => {
//     e.preventDefault()
//     modal.style.display = "block"
// })

// closeBtn.addEventListener('click', () => {
//     modal.style.display="none"
// })

// window.addEventListener('click', (e) => {
//     if(e.target == modal){
//     modal.style.display = "none"
//     }
// })