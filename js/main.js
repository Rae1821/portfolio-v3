



//Hamburger menu
const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelectorAll('.nav__link');

navToggle.addEventListener("click", () => {
    document.body.classList.toggle('nav-open');
});

navLinks.forEach(link => {
    link.addEventListener("click", () => {
        document.body.classList.remove('nav-open');
    });
});

//Scroll reveal effects
ScrollReveal().reveal('about__photo', { delay: 100 });
ScrollReveal().reveal('.section__title--projects', { delay: 300 });
ScrollReveal().reveal('.project__content', { delay: 400 });

//Back to top button 
const backToTopButton = document.querySelector('.back-to-top');
let isBackToTopRendered = false;

let alterStyles = (isBackToTopRendered) => {
    backToTopButton.style.visibility = isBackToTopRendered ? "visible" : "hidden";
    backToTopButton.style.opacity = isBackToTopRendered ? 1 : 0;
    backToTopButton.style.transform = isBackToTopRendered
    ? "scale(1)"
    : "scale(0)";
};

window.addEventListener("scroll", () => {
    if (window.scrollY > 700) {
        isBackToTopRendered = true;
        alterStyles(isBackToTopRendered);
    } else {
        isBackToTopRendered = false;
        alterStyles(isBackToTopRendered);
    }
});