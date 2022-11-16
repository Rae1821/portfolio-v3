



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
ScrollReveal().reveal('.project__content', { delay: 500 });

