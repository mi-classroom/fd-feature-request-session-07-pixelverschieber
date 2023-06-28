const hamburgerMenu = document.querySelector(".mobile-navbar figure svg");
const menu = document.querySelector(".mobile-navbar nav");
const main = document.querySelector("main");

hamburgerMenu.addEventListener("click", () => {
    menu.classList.toggle("active");
    main.classList.toggle("active");
});

main.addEventListener("click", () => {
    menu.classList.remove("active");
    main.classList.remove("active");
});