// Typing animation
const text = "Software Developer | Web Developer | Tech Enthusiast";
const heroText = document.querySelector(".hero-text p");

let index = 0;

function typeEffect() {
    if (index < text.length) {
        heroText.textContent += text.charAt(index);
        index++;
        setTimeout(typeEffect, 60);
    }
}

window.addEventListener("load", () => {
    heroText.textContent = "";
    typeEffect();
});

// Navbar active link
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav a");

window.addEventListener("scroll", () => {
    let current = "";

    sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        const sectionHeight = section.clientHeight;

        if (pageYOffset >= sectionTop) {
            current = section.getAttribute("id");
        }
    });

    navLinks.forEach(link => {
        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {
            link.classList.add("active");
        }
    });
});

// Scroll reveal animation
const revealElements = document.querySelectorAll(".section, .hero");

function revealOnScroll() {
    const trigger = window.innerHeight * 0.85;

    revealElements.forEach(el => {
        const top = el.getBoundingClientRect().top;

        if (top < trigger) {
            el.style.opacity = "1";
            el.style.transform = "translateY(0)";
        }
    });
}

revealElements.forEach(el => {
    el.style.opacity = "0";
    el.style.transform = "translateY(40px)";
    el.style.transition = "all 0.8s ease";
});

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);

// Floating glow background
const glow = document.createElement("div");

glow.style.position = "fixed";
glow.style.width = "300px";
glow.style.height = "300px";
glow.style.borderRadius = "50%";
glow.style.background = "rgba(56,189,248,0.12)";
glow.style.filter = "blur(80px)";
glow.style.pointerEvents = "none";
glow.style.zIndex = "-1";

document.body.appendChild(glow);

document.addEventListener("mousemove", (e) => {
    glow.style.left = e.clientX - 150 + "px";
    glow.style.top = e.clientY - 150 + "px";
});

// Welcome message
setTimeout(() => {
    console.log("Welcome to Priyanshu Mishra Portfolio");
}, 1000);
