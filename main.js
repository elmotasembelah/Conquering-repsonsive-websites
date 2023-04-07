const navToggle = document.querySelector(".nav-toggle");
const nav = document.querySelector(".nav");

console.log(navToggle);

navToggle.addEventListener("click", () => {
    nav.classList.toggle("nav--visible");
});
