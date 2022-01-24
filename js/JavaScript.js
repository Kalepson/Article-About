const button = document.querySelector(".menu-wrap")
const body = document.querySelector("body");
const container = document.querySelector(".conteiner")
const menu = document.querySelector(".menu")


const arr_text = ["Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
    "Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
    "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.",
    "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum,",
    "All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.",
    "The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.",
]

const menu_text = [
    "Home",
    "Projects",
    "About",
    "Contact",
]

menu_text.forEach(element => {
    const li = document.createElement("li");
    li.textContent = element;
    li.setAttribute("data-text", element)

    menu.append(li)
})


arr_text.forEach(element => {
    const p = document.createElement("p");
    p.textContent = element;
    container.append(p)
})

button.addEventListener("click", () => body.classList.toggle("open"))



