/*#################################################################*/
/*----------------------Menu Hamburguesa---------------------------*/
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = ("click", () => {
    menuIcon.classList.toogle('menu-icon');
    navbar.classList.toogle('active');
});



/*#################################################################*/
/*----------------Seccion activa en el Scroll----------------------*/
let sections = document.querySelectorAll('section');
let nabLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            nabLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' +id + ']').classList.add('active');
            });
        };
    });

    /*#################################################################*/
    /*----------------Stick Navbar----------------------*/
    let header = document.querySelector('header');

    header.classList-toogle('sticky', window.scrollY > 100);

    /*#################################################################*/
    /*----------------Ocultar Menu cuando selecciona opcion----------------------*/
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
};

/*#################################################################*/
/*----------------scroll reveal----------------------*/
ScrollReveal({
    /* reset: true,*/
    distance: '80px',
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact form', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'left' });
ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right' });


/*#################################################################*/
/*----------------Efecto escritura---------------------------------*/
const typed = new Typed('.multiple-text',{
    strings: ['Frontend Developer', 'UX/UI Designer', 'Concept Artist', '3D Modeler'],
    typeSpeed: 100,
    backSpeed: 100,
    BackDelay: 100,
    loop: true
});