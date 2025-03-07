let selectedBarber = '';
let selectedCut = '';
let selectedTime = null;
let price = 0;
let appointmentDetails = null;

class Appointment {
    constructor(barber, cut, time, price, userName, userPhone) {
        this.barber = barber;
        this.cut = cut;
        this.time = `${time > 12 ? time - 12 : time}:00 PM`;
        this.price = price;
        this.userName = userName;
        this.userPhone = userPhone;
    }

    getTotalInBolivares() {
        return (this.price * 50).toFixed(2);
    }

    getDetails() {
        return `${this.cut} - ${this.getTotalInBolivares()} Bs. | ${this.barber} | ${this.time}`;
    }
}

function selectBarber(barberName) {
    document.querySelectorAll('.barber-card').forEach(card => {
        card.classList.toggle('selected', card.innerText.includes(barberName));
    });
    selectedBarber = barberName;
    updateAppointmentDetails();
}

function selectCut(cutName, cutPrice) {
    document.querySelectorAll('.cut-card').forEach(card => {
        card.classList.toggle('selected', card.innerText.includes(cutName));
    });
    selectedCut = cutName;
    price = cutPrice;
    updateAppointmentDetails();
}

// Modificar en agenderApp.js la función selectTime
function selectTime(hour) {
    document.querySelectorAll('.time-slot').forEach(slot => {
        const displayHour = hour > 12 ? hour - 12 : hour;
        slot.classList.toggle('selected', slot.innerText === `${displayHour}:00 PM`);
    });
    selectedTime = hour;
    updateAppointmentDetails();
}

function validateSelections() {
    return selectedBarber && selectedCut && selectedTime !== null;
}

function updateAppointmentDetails() {
    if (validateSelections()) {
        const userName = document.getElementById('name').value.trim();
        const userPhone = document.getElementById('phone').value.trim();
        appointmentDetails = new Appointment(selectedBarber, selectedCut, selectedTime, price, userName, userPhone);
        displayTotal();
    } else {
        document.getElementById('total-display').textContent = ""; // Limpiar si falta algo
    }
}

function displayTotal() {
    const totalContainer = document.getElementById('total-display');
    totalContainer.textContent = appointmentDetails ? appointmentDetails.getDetails() : '';
}

document.getElementById('sendForm').addEventListener('click', (e) => {
    e.preventDefault();

    const userName = document.getElementById('name').value.trim();
    const userPhone = document.getElementById('phone').value.trim();
    const paymentMethod = document.getElementById('paymentMethod').value;

    if (!validateSelections() || !userName || !userPhone) {
        showFeedback('⚠️ Completa todos los campos requeridos');
        return;
    }

    appointmentDetails = new Appointment(selectedBarber, selectedCut, selectedTime, price, userName, userPhone);
    localStorage.setItem('appointmentDetails', JSON.stringify(appointmentDetails));

    if (paymentMethod === 'movil') {
        window.location.href = 'pay_confirm.html';
    } else {
        showModal(); // Solo mostrar modal para efectivo
    }
});
function showFeedback(message) {
    const feedback = document.getElementById('selection-message');
    feedback.textContent = message;
    feedback.classList.remove('hidden');
    setTimeout(() => feedback.classList.add('hidden'), 3000);
}

// Actualizar resumen al escribir en los campos
document.getElementById('name').addEventListener('input', updateAppointmentDetails);
document.getElementById('phone').addEventListener('input', updateAppointmentDetails);