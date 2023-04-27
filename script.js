const burgerIcon = document.querySelector(".burger-menu-icon");
const burgerScreen = document.querySelector(".burger-menu-screen");

burgerIcon.addEventListener("click", () => {
    burgerScreen.classList.toggle("active-burger-menu-screen");
})

