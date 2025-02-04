// Inicializa una variable para almacenar el barbero seleccionado
let selectedBarber = '';

// Inicializa una variable para almacenar el corte seleccionado
let selectedCut = '';

// Inicializa una variable para almacenar la hora seleccionada
let selectedTime = null;

// Inicializa una variable para almacenar el precio del corte
let price = 0; // Asegúrate de que price esté definido

// Inicializa una variable para almacenar los detalles de la cita
let appointmentDetails = null;

// Define una clase llamada Appointment para manejar los detalles de la cita
class Appointment {
    // Constructor que recibe los parámetros necesarios para crear una cita
    constructor(barber, cut, time, price, userName, userPhone) {
        this.barber = barber; // Asigna el barbero
        this.cut = cut; // Asigna el corte
        this.time = time; // Asigna la hora
        this.price = price; // Asigna el precio
        this.userName = userName; // Asigna el nombre del usuario
        this.userPhone = userPhone; // Asigna el teléfono del usuario
    }

    // Método para calcular el total en bolívares
    getTotalInBolivares() {
        return this.price * 53.85; // Calcula el total en bolívares
    }

    // Método para obtener los detalles de la cita en formato de texto
    getDetails() {
        return `${this.cut} ${this.getTotalInBolivares()} Bs. / ${this.barber} / Hora: ${this.time}`;
    }
}

// Función para seleccionar un barbero
function selectBarber(barberName) {
    // Selecciona todos los elementos con la clase 'card'
    const barberCards = document.querySelectorAll('.card');
    // Elimina la clase 'selected' de todas las tarjetas
    barberCards.forEach(card => card.classList.remove('selected'));

    // Asigna el nombre del barbero seleccionado
    selectedBarber = barberName;
    // Busca la tarjeta que contiene el nombre del barbero seleccionado
    const selectedCard = Array.from(barberCards).find(card => card.innerText.includes(barberName));
    // Si se encuentra la tarjeta, añade la clase 'selected'
    if (selectedCard) {
        selectedCard.classList.add('selected');
    }

    // No llamar a displayTotal aquí
    updateAppointmentDetails(); // Actualiza los detalles de la cita
}

// Función para seleccionar un corte
function selectCut(cutName, cutPrice) {
    // Selecciona todos los elementos con la clase 'card'
    const cutCards = document.querySelectorAll('.card');
    // Elimina la clase 'selected' de todas las tarjetas
    cutCards.forEach(card => card.classList.remove('selected'));

    // Asigna el nombre del corte seleccionado
    selectedCut = cutName;
    price = cutPrice; // Asigna el precio del corte
    // Busca la tarjeta que contiene el nombre del corte seleccionado
    const selectedCard = Array.from(cutCards).find(card => card.innerText.includes(cutName));
    // Si se encuentra la tarjeta, añade la clase 'selected'
    if (selectedCard) {
        selectedCard.classList.add('selected');
    }

    // No llamar a displayTotal aquí
    updateAppointmentDetails(); // Actualiza los detalles de la cita
}

// Función para seleccionar una hora
function selectTime(hour) {
    // Selecciona todos los elementos con la clase 'time-slot'
    const timeSlots = document.querySelectorAll('.time-slot');
    // Elimina la clase 'selected' de todos los slots de tiempo
    timeSlots.forEach(slot => slot.classList.remove('selected'));

    // Asigna la hora seleccionada
    selectedTime = hour;
    // Busca el slot que contiene la hora seleccionada
    const selectedSlot = Array.from(timeSlots).find(slot => slot.innerText == hour);
    // Si se encuentra el slot, añade la clase 'selected'
    if (selectedSlot) {
        selectedSlot.classList.add('selected');
    }

    // No llamar a displayTotal aquí
    updateAppointmentDetails(); // Actualiza los detalles de la cita
}

// Función para actualizar los detalles de la cita
function updateAppointmentDetails() {
    // Verifica si se han seleccionado el barbero, el corte y la hora
    if (selectedBarber && selectedCut && selectedTime !== null) {
        // Crea una nueva instancia de Appointment con los detalles seleccionados
        appointmentDetails = new Appointment(selectedBarber, selectedCut, selectedTime, price, '', '');
        displayTotal(); // Muestra el total
    } else {
        appointmentDetails = null; // Limpia los detalles si no hay selección completa
    }
}

// Función para mostrar el total de la cita
function displayTotal() {
    // Selecciona el contenedor donde se mostrará el total
    const totalContainer = document.getElementById('total-display');
    // Verifica si hay detalles de la cita
    if (appointmentDetails) {
        // Muestra los detalles de la cita en el contenedor
        totalContainer.innerText = appointmentDetails.getDetails(); // Muestra los detalles de la cita
        console.log(paymentMethod); // Muestra el método de pago en la consola
    } else {
        totalContainer.innerText = ''; // Limpia el mensaje si no hay selección
    }
}

// Añade un evento al botón de enviar el formulario
document.getElementById('sendForm').addEventListener('click', function(event) {
    // Obtiene el nombre y teléfono del usuario desde el formulario
    const userName = document.getElementById('name').value;
    const userPhone = document.getElementById('phone').value;
    const paymentMethodSelect = document.getElementById('paymentMethod');
    const selectedValue = paymentMethodSelect.value; // Obtiene el valor seleccionado

    // Verifica que todos los campos estén completos
    if (!selectedBarber || !selectedCut || selectedTime === null || !userName || !userPhone) {
        console.log('Formulario incompleto'); // Muestra un mensaje en la consola si falta información
    } else {
        // Actualiza appointmentDetails con el nombre y teléfono del usuario
        appointmentDetails.userName = userName;
        appointmentDetails.userPhone = userPhone;

        // Guarda los detalles de la cita en el almacenamiento local
        localStorage.setItem('appointmentDetails', JSON.stringify(appointmentDetails));

        // Manejo del método de pago
        if (selectedValue === 'movil') {
            window.location.href = '../buy/pay_confirm.html'; // Redirige a la página de confirmación
        } else if (selectedValue === 'efectivo') {
            // Muestra el mensaje de cita agendada
            document.getElementById('total-display').innerText = 'Cita agendada';
            window.location.href = './index.html'; // Redirige a la página de confirmación
        }
    }
});