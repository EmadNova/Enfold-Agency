const burgerIcon = document.querySelector(".burger-menu-icon");
const burgerScreen = document.querySelector(".burger-menu-screen");
const rotateOne = document.querySelector(".burger-menu-icon__line--one")
const rotateTwo = document.querySelector(".burger-menu-icon__line--two")
const rotateThree = document.querySelector(".burger-menu-icon__line--three")
const arrow = document.querySelector(".main__arrow-down");


burgerIcon.addEventListener("click", () => {
    burgerScreen.classList.toggle("active-burger-menu-screen");
    rotateOne.classList.toggle('burger-menu-icon--rotate--one');
    rotateTwo.classList.toggle('burger-menu-icon--rotate--two');
    rotateThree.classList.toggle('burger-menu-icon--rotate--three');
})

arrow.addEventListener("click", () => {
    window.scroll({
        top: 760,
        behavior: "smooth",
    })
})


//
// window.document.addEventListener('scroll', () => {
//     console.log(window.scrollY);
// })