const button = document.querySelector(".menu-wrap")
const body = document.querySelector("body");
const span = document.querySelector(".span")
const close = document.querySelector(".popup-close")
const fade = document.querySelector(".popup-fade")

button.addEventListener("click" ,() =>{
    body.classList.toggle("open")
})


span.addEventListener("click" ,() =>{
    fade.style.display ="block"

})

close.addEventListener("click" , () => {
    fade.style.display = "none"
})
