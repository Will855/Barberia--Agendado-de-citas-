// Obtiene los elementos del DOM
const menuButtonOpen = document.getElementById('open-btn');
const menuButtonClose = document.querySelector('.close-btn');


// Función para mostrar el menú
const showMenu = () => {
    mobileMenu.classList.remove('hidden');
    mobileMenu.classList.add('show');
};

// Función para ocultar el menú
const hideMenu = () => {
    mobileMenu.classList.remove('show');
    mobileMenu.classList.add('hidden');
};

// Añade los eventos a los botones
menuButtonOpen.addEventListener('click', showMenu);
menuButtonClose.addEventListener('click', hideMenu);