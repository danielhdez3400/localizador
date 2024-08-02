function updateDateTime() {
    const now = new Date();

    // Update time
    const timeElement = document.getElementById('time');
    const timeString = now.toLocaleTimeString('es-ES', { hour: '2-digit', minute: '2-digit', second: '2-digit' });
    timeElement.textContent = `Hora: ${timeString}`;

    // Update date
    const dateElement = document.getElementById('date');
    const dateString = now.toLocaleDateString('es-ES', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });
    dateElement.textContent = `Fecha: ${dateString}`;

    // Update location
    const locationElement = document.getElementById('location');
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position) => {
            const { latitude, longitude } = position.coords;
            locationElement.textContent = `Ubicación: Lat ${latitude.toFixed(2)}, Lon ${longitude.toFixed(2)}`;
        }, () => {
            locationElement.textContent = 'Ubicación: No disponible';
        });
    } else {
        locationElement.textContent = 'Ubicación: Geolocalización no soportada';
    }
}

// Update the time every second
setInterval(updateDateTime, 1000);

// Initial call
updateDateTime();
