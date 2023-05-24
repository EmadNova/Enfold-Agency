const burgerIcon = document.querySelector(".burger-menu-icon");
const burgerScreen = document.querySelector(".burger-menu-screen");
const rotateOne = document.querySelector(".burger-menu-icon__line--one")
const rotateTwo = document.querySelector(".burger-menu-icon__line--two")
const rotateThree = document.querySelector(".burger-menu-icon__line--three")
const arrow = document.querySelector(".main__arrow-down");
const arrowUp = document.querySelector(".arrowUp");
const li = document.querySelectorAll(".burger-menu-screen__list__each")


arrowUp.addEventListener("click", () => {
    window.scroll({
        top: 0,
        behavior: "smooth",
    })
})

burgerIcon.addEventListener("click", () => {
    burgerScreen.classList.toggle("active-burger-menu-screen");
    rotateOne.classList.toggle('burger-menu-icon--rotate--one');
    rotateTwo.classList.toggle('burger-menu-icon--rotate--two');
    rotateThree.classList.toggle('burger-menu-icon--rotate--three');
})

document.onclick = function (e) {
    if (!burgerScreen.contains(e.target) && !burgerIcon.contains(e.target)) {
        burgerScreen.classList.remove("active-burger-menu-screen");
        rotateOne.classList.remove('burger-menu-icon--rotate--one');
        rotateTwo.classList.remove('burger-menu-icon--rotate--two');
        rotateThree.classList.remove('burger-menu-icon--rotate--three');
    }
}

li.forEach((value) => {
    value.addEventListener("click", () => {
        burgerScreen.classList.remove("active-burger-menu-screen");
        rotateOne.classList.remove('burger-menu-icon--rotate--one');
        rotateTwo.classList.remove('burger-menu-icon--rotate--two');
        rotateThree.classList.remove('burger-menu-icon--rotate--three');
    })
})

if (window.innerWidth <= 320) {
    arrow.addEventListener("click", () => {
        window.scrollTo(0, 820)
    })
} else if (window.innerWidth <= 480 && window.innerWidth <= 786) {
    arrow.addEventListener("click", () => {
        window.scrollTo(0, 740)
    })
} else if (window.innerWidth >= 1201) {
    arrow.addEventListener("click", () => {
        window.scrollTo(0, 750)
    })
}

window.addEventListener("scroll", () => {

    if (window.scrollY >= 900) {
        arrowUp.style.display = "block";
    } else {
        arrowUp.style.display = "none";
    }
})

// window.document.addEventListener('scroll', () => {
//     console.log(window.scrollY);
// })