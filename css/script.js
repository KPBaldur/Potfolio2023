/*#################################################################*/
/*----------------------Menu Hamburguesa---------------------------*/
let menuIcon = document.querySelector('#menu-icon');
let  navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toogle('bx-x');
    navbar.classList.toogle('active');
};



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
                document.querySelector('header nav a[href*=' +id +']').classList.add('active');
            });
        };
    });

    /*#################################################################*/
    /*----------------Stick Navbar----------------------*/
    let header = document.querySelector('Header');

    header.classList-toogle('sticky', window.scrollY > 100);
}

