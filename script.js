document.addEventListener('DOMContentLoaded', function () {
    const hamburguesa = document.querySelector('.hamburguesa');
    const nav = document.querySelector('nav');
    const menuLinks = document.querySelectorAll('.menu-link');

    hamburguesa.addEventListener('click', function () {
        nav.classList.toggle('show');
        hamburguesa.classList.toggle('cruz');
    });

    menuLinks.forEach(function (link) {
        link.addEventListener('click', function () {
            nav.classList.remove('show');
            hamburguesa.classList.remove('cruz');
        });
    });

    window.addEventListener('resize', function () {
        if (window.innerWidth > 768) {
            nav.classList.remove('show');
            hamburguesa.classList.remove('cruz');
        }
    });
});

