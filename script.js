const sections = document.querySelectorAll('.section');

function reveal() {
    sections.forEach(sec => {
        const top = sec.getBoundingClientRect().top;
        if (top < window.innerHeight - 100) {
            sec.classList.add('show');
        }
    });
}

window.addEventListener('scroll', reveal);
reveal();
// TYPEWRITER EFFECT
const text = ["Front-End Developer", "Web Developer", "App Developer"];
let index = 0;
let char = 0;

function type() {
    const p = document.querySelector(".typewriter");
    if (char < text[index].length) {
        p.textContent += text[index].charAt(char);
        char++;
    } else {
        setTimeout(() => {
            p.textContent = "";
            char = 0;
            index = (index + 1) % text.length;
        }, 1500);
    }
}

setInterval(type, 150);
// DARK MODE
const toggle = document.querySelector(".dark-toggle");

toggle.addEventListener("click", () => {
    document.body.classList.toggle("dark");
});
// MOBILE MENU
const menuIcon = document.querySelector(".menu-icon");
const nav = document.querySelector("nav");

menuIcon.addEventListener("click", () => {
    nav.classList.toggle("showMenu");
});