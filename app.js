const menuBtn = document.getElementById('menuBtn');
const mobileMenu = document.getElementById('mobileMenu');
const menuIcon = document.querySelector('.menu-icon');

menuBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    mobileMenu.classList.toggle('open');
    menuIcon.classList.toggle('open');
});

// Cerrar menú al hacer clic fuera
document.addEventListener('click', (e) => {
    if (!mobileMenu.contains(e.target) && !menuBtn.contains(e.target)) {
        mobileMenu.classList.remove('open');
        menuIcon.classList.remove('open');
    }
});

// Cerrar menú al cambiar tamaño de pantalla
window.addEventListener('resize', () => {
    if (window.innerWidth >= 768) {
        mobileMenu.classList.remove('open');
        menuIcon.classList.remove('open');
    }
});

//formulario
document.getElementById('contactForm').addEventListener('submit', function (e) {
    e.preventDefault();

    // Mostrar notificación
    const notification = document.getElementById('successMessage');
    notification.classList.remove('hidden');

    // Ocultar después de 3 segundos
    setTimeout(() => {
        notification.classList.add('hidden');
    }, 3000);

    // Resetear formulario
    this.reset();
});