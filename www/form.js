const modal = document.querySelector(".modal-container")
const btn = document.querySelector(".contact-btn")
const closeBtn = document.querySelector(".modal-btn")


btn.addEventListener('click', (e) => {
    e.preventDefault()
    modal.style.display = "block"
})

closeBtn.addEventListener('click', () => {
    modal.style.display="none"
})

window.addEventListener('click', (e) => {
    if(e.target == modal){
    modal.style.display = "none"
    }
})