/*#################################################################*/
/*----------------------Menu Hamburguesa---------------------------*/

let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
  menuIcon.classList.toggle('bx-x');
  if (window.innerWidth <= 768) {
    // Verificar si la ventana está en la vista móvil
    if (navbar.style.display === 'none') {
      navbar.style.display = 'block';
    } else {
      navbar.style.display = 'none';
    }
  }
};

// Agregar evento de escucha al documento
document.addEventListener('click', function(event) {
  // Verificar si el clic ocurrió dentro del menú o en el botón del menú
  if (event.target.closest('.navbar') || event.target.closest('#menu-icon')) {
    return; // Si el clic ocurrió dentro del menú o en el botón del menú, no hacer nada y mantenerlo abierto
  }

  // Si el clic ocurrió fuera del menú, cerrarlo solo en la vista móvil
  if (window.innerWidth <= 768) {
    menuIcon.classList.remove('bx-x');
    navbar.style.display = 'none';
  }
});

// Agregar evento de escucha al cambio de tamaño de la ventana
window.addEventListener('resize', function() {
  if (window.innerWidth > 768) {
    // Si la ventana se redimensiona a la vista de escritorio, mostrar el menú
    navbar.style.display = 'block';
  } else {
    // Si la ventana se redimensiona a la vista móvil, ocultar el menú
    navbar.style.display = 'none';
  }
});



/*#################################################################*/
/*----------------Extender parrafos----------------------*/

const parrafo = document.getElementById('parrafo');
const btnLeerMas = document.querySelector('expand-btn');

btnLeerMas.addEventListener('click', function () {
  parrafo.style.maxHeight = '100rem' ;
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

    header.classList.toggle('sticky', window.scrollY > 100);

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
const typado = new Typed('.texto-multiple',{
    strings: ['Desarrollador Fronted', 'Diseñador UX/UI', 'Artista Conceptual', 'Modelador 3D'],
    typeSpeed: 100,
    backSpeed: 100,
    BackDelay: 100,
    loop: true
});

const typed = new Typed('.multiple-text',{
    strings: ['Frontend Developer', 'UX/UI Designer', 'Concept Artist', '3D Modeler'],
    typeSpeed: 100,
    backSpeed: 100,
    BackDelay: 100,
    loop: true
});