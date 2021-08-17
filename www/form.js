const modal = document.querySelector(".modal-container")
const btn = document.querySelector(".contact-btn")
const closeBtn = document.querySelector(".modal-btn")
const form = document.getElementById("form")
const firstName = document.getElementById("firstname")
const lastName = document.getElementById("lastname")
const phone = document.getElementById("telephone")
const email = document.getElementById("email")
const formMessage = document.getElementById("message")


form.addEventListener("submit", (e) => {
    e.preventDefault()
    // console.log('1')
    if (checkInputs()) {
        modal.style.display = "block"
        form.reset()
        let successInput = document.querySelectorAll(".form-control.success")
    //modal.style.display = "block"
        successInput.forEach(element => {
            element.classList.remove('success')
        })
        formMessage.style.border = "none"
    }
    
})





function checkInputs() {
    let valid= true
    const firstNameValue = firstName.value.trim()
    const lastNameValue = lastName.value.trim()
    const phoneValue = phone.value.trim()
    const emailValue = email.value.trim()
    const formMessageValue = formMessage.value.trim()

    //regex definations
    const regnames = /^[a-zA-Z]+[^0-9@!#%^&*()+{}]$/
    const regphone = /(?:\+?61)?(?:\(0\)[23478]|\(?0?[23478]\)?)\d{8}/
    const regemail = /[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9]+/
    
    //lastName validation
    if (lastNameValue === "") {
        valid = false
        // console.log('2')
        errorFunction(lastName, "lastname cannot be empty")
       
    } else if (!regnames.test(lastNameValue)) {
        valid = false
        errorFunction(lastName, "Your family name is invalid. Please enter the correct last name")
    } else {
        successFunction(lastName)
    }


    //firstname validation
    if (firstNameValue === "") {
        valid = false
        // console.log('2')
        errorFunction(firstName, "Firstname cannot be empty")
    } else if (!regnames.test(firstNameValue)) {
        valid = false
        errorFunction(firstName, "Your first name is invalid. Please enter the correct first name")
    } else {
        successFunction(firstName)
    }

    //phone validation
    if (phoneValue === "") {
        valid = false
        errorFunction(phone, 'phone number cannot be empty')
    } else if (!regphone.test(phoneValue)) {
        valid = false
        errorFunction(phone, "please enter the correct phone number")
    } else {
        successFunction(phone)
    }

    // email validation-------
    
    if (emailValue === "") {
        valid = false
        // console.log('2')
        errorFunction(email, "email cannot be empty")
       
    } else if (!regemail.test(emailValue)) {
        valid = false
        errorFunction(email, "Your email is invalid. Please enter the correct email")
    } else {
        successFunction(email)
    }

    if (formMessageValue === "") {
        valid = false
        formMessage.style.border = '3px solid red'
    } else {
        formMessage.style.border = '3px solid rgb(10, 212, 10)'
    }

    return valid


}




function errorFunction(formElement, message) {
    validForm = false
    // console.log('3')
   // testVariable = false;
    const parentFormElement = formElement.parentElement;
    const small = parentFormElement.querySelector('small')

    parentFormElement.className = 'form-control error'
    small.innerText = message 
}



function successFunction(formElement) {
    //testVariable = true
    const parentFormElement = formElement.parentElement;
    parentFormElement.className = 'form-control success'
}





// btn.addEventListener('click', (e) => {
//     e.preventDefault()
//     modal.style.display = "block"
// })


closeBtn.addEventListener('click', () => {
    modal.style.display="none"
})

window.addEventListener('click', (e) => {
    if(e.target == modal){
    modal.style.display = "none"
    }
})