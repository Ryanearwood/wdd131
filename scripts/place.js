window.onload = function() {
    // Display the windchill factor
    var temperature = 20; // replace with your static temperature value
    var windSpeed = 5; // replace with your static wind speed value
    var windChill = calculateWindChill(temperature, windSpeed);
    var weatherBox = document.getElementById('weather-box');
    if (windChill !== "N/A") {
        weatherBox.innerHTML += '<p>Wind Chill: ' + windChill.toFixed(2) + '°F</p>';
    } else {
        weatherBox.innerHTML += '<p>Wind Chill: N/A</p>';
    }

    // Display the current year and the date the document was last modified
    var currentYear = new Date().getFullYear();
    document.getElementById('footer').innerHTML = document.getElementById('footer').innerHTML.replace('2024', currentYear);
    document.getElementById('lastModified').textContent = document.lastModified;
}

function calculateWindChill(temperature, windSpeed) {
    var windChill;
    if (temperature <= 10 && windSpeed > 3) { // Check if conditions are met for wind chill calculation
        windChill = 35.74 + 0.6215 * temperature - 35.75 * Math.pow(windSpeed, 0.16) + 0.4275 * temperature * Math.pow(windSpeed, 0.16);
        return windChill;
    } else {
        return "N/A";
    }
}
