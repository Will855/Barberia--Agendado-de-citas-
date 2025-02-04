// Obtener datos de localStorage
const appointmentDetails = JSON.parse(localStorage.getItem('appointmentDetails')); // Recupera los detalles de la cita almacenados en localStorage y los convierte de JSON a objeto
const userName = appointmentDetails ? appointmentDetails.userName : 'Usuario'; // Asigna el nombre del usuario si existe, de lo contrario, usa 'Usuario'
const price = appointmentDetails ? appointmentDetails.price : '0'; // Asigna el precio de la cita si existe, de lo contrario, usa '0'

// Mostrar mensaje de progreso
document.getElementById('progress-message').innerText = `${userName}, ya el proceso está casi listo.`; // Muestra un mensaje de progreso personalizado para el usuario

// Mostrar datos de pago
const paymentInfo = `
    Banco: (0102) Venezuela
    Teléfono: 04263940038
    Cédula: 28700809
    Monto a Pagar: ${price}$ / ${price * 53.85}Bs.
`; // Crea un string con la información de pago, incluyendo el monto en dólares y su equivalente en bolívares
document.getElementById('payment-info').innerText = paymentInfo; // Muestra la información de pago en el contenedor correspondiente

// Manejar el envío del formulario
document.getElementById('payment-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Previene el comportamiento por defecto del formulario (que es recargar la página)
    // Aquí puedes manejar el envío de los datos
    alert('Formulario enviado con éxito.'); // Muestra un mensaje de éxito al enviar el formulario
});