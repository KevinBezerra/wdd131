function updateFooter() {
    const currentYearSpan = document.getElementById('currentyear');
    const lastModifiedSpan = document.getElementById('lastmodified');
    const currentYear = new Date().getFullYear();
    const lastModified = document.lastModified;
    currentYearSpan.textContent = currentYear;
    lastModifiedSpan.textContent = `Last Modification: ${lastModified}`;
}

const temperature = 28;
const windSpeed = 15;

function calculateWindChill(temp, speed) {
    return (13.12 + 0.6215 * temp - 11.37 * Math.pow(speed, 0.16) + 0.3965 * temp * Math.pow(speed, 0.16)).toFixed(1);
}

function displayWindChill() {
    const windChillSpan = document.getElementById('windchill');
    if (temperature <= 10 && windSpeed > 4.8) {
        const windChillValue = calculateWindChill(temperature, windSpeed);
        windChillSpan.textContent = `${windChillValue}°C`;
    } else {
        windChillSpan.textContent = "N/A";
    }
}

document.addEventListener('DOMContentLoaded', () => {
    updateFooter();
    displayWindChill();
});