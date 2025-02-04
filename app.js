// Obtiene el botón del menú utilizando su ID
const menuButton = document.getElementById('menuButton');

// Añade un evento de clic al botón del menú
menuButton.addEventListener('click', () => {
    // Alterna la clase 'hidden' en el menú móvil, ocultándolo si está visible y mostrándolo si está oculto
    mobileMenu.classList.toggle('hidden');
    // Alterna la clase 'show' en el menú móvil, mostrando el menú si está oculto y ocultándolo si está visible
    mobileMenu.classList.toggle('show'); 
});
// **NO TOCAR


const arr = [
    ['assets/blog1.jpg', 'Blog 1', 'Una vez, un cliente llegó a la barbería con un peinado tan loco que pensé que era un nuevo estilo de moda. ¡Resultó que se había quedado dormido en la playa y el viento hizo su magia! 😂🌊'],
    ['assets/blog2.jpg', 'Blog 2', 'Recuerdo a un cliente que pidió un corte de cabello "como el de su actor favorito". Cuando terminó, se miró al espejo y dijo: "¡No me veo como él, me veo mejor!" 😄✂️'],
    ['assets/blog8.jpg', 'Blog 8', 'Un cliente me contó que su hijo pensaba que los barberos eran magos porque "hacen desaparecer el cabello". ¡Le dije que en realidad somos más como artistas! 🎨✂️'],
    ['assets/blog9.jpg', 'Blog 9', 'Una vez, un cliente pidió un corte "a la moda", pero no sabía que la moda había cambiado desde los años 80. ¡Fue un viaje nostálgico! 🕺✂️'],
    ['assets/blog11.webp', 'Blog 11', 'Una vez, un cliente trató de convencerme de que el cabello largo era la nueva tendencia. Le dije que la historia del cabello es cíclica. 🌀✂️'],
    ['assets/blog12.webp', 'Blog 12', 'Un cliente me preguntó si podía hacer un corte que le hiciera parecer más "rudo". Le dije que eso depende de su actitud, ¡no solo del corte! 😎✂️']
];

// Selecciona el contenedor de tarjetas en el DOM
const cardContainer = document.getElementById('card-container');

// Función para crear y mostrar las tarjetas
function createCards() {
    arr.forEach(item => {
        // Crea un nuevo elemento div para la tarjeta
        const card = document.createElement('div');
        // Asigna clases para el estilo de la tarjeta
        card.className = 'bg-white rounded-lg shadow-lg p-6 transition-transform duration-300 hover:shadow-xl';
        // Añade la imagen y el texto de la anécdota a la tarjeta
        card.innerHTML = `
            <img src="${item[0]}" alt="${item[1]}" class="w-full h-40 object-cover rounded-md mb-4">
            <h3 class="text-xl font-bold mb-2">${item[1]}</h3>
            <p class="text-gray-700 text-lg">${item[2]}</p>
        `;
        // Añade la tarjeta al contenedor
        cardContainer.appendChild(card);
    });
}

// Inicializa el contenedor de tarjetas
createCards();