const menu_wrap = document.querySelector(".menu-wrap")
const body = document.querySelector("body");
const popup_open = document.querySelector(".span")
const popup_close = document.querySelector(".popup-close")
const popup_fade = document.querySelector(".popup-fade")

menu_wrap.addEventListener("click", () => {
    body.classList.toggle("open")
})


popup_open.addEventListener("click", () => {
    popup_fade.style.display = "block"

})

popup_close.addEventListener("click", () => {
    popup_fade.style.display = "none"
})
document.querySelector("h1").textContent = "This is an Article About Something"
document.querySelector(".span").textContent = "Toggle the menu by clicking on the infamous hamburger icon in the top left corner!  It could be the most fun you will ever have."
document.querySelector("h3").textContent = "by Lauren Ipsum"
document.querySelector(".first-paragraph").textContent = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever\n" +
    "        since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived\n" +
    "        not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the\n" +
    "        1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus\n" +
    "        PageMaker including versions of Lorem Ipsum."
document.querySelector(".The-second-paragraph").textContent = "Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum'\n" +
    "        will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose\n" +
    "        (injected humour and the like)."
document.querySelector(".The-third-paragraph").textContent = "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using\n" +
    "        Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like\n" +
    "        readable English."
document.querySelector(".Fourth-paragraph").textContent = "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour,\n" +
    "        or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum,All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet.\n" +
    "        It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable.\n" +
    "        The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc."
document.querySelector(".popup-span-Content").textContent = "Contrary to popular belief, Lorem Ipsum is not simply random text.\n" +
    "            It has roots in a piece of classical Latin literature from 45 BC,\n" +
    "            making it over 2000 years old. Richard McClintock, a Latin professor\n" +
    "            at Hampden-Sydney College in Virginia, looked up one of the more obscure\n" +
    "            Latin words, consectetur, from a Lorem Ipsum passage,\n" +
    "            and going through the cites of the word in classical literature,\n" +
    "            discovered the undoubtable source. Lorem Ipsum comes from sections\n" +
    "            1.10.32 and 1.10.33 of\n" +
    "            \"de Finibus Bonorum et Malorum\" (The Extremes of Good and Evil) by Cicero,\n" +
    "            written in 45 BC. This book is a treatise on the theory of ethics, very popular\n" +
    "            during the Renaissance. The first line of Lorem Ipsum, \"Lorem ipsum dolor sit amet..\",\n" +
    "            comes from a line in section 1.10.32.";
