window.onload = function() {
    // Display the windchill factor
    var temperature = 20; // replace with your static temperature value
    var windSpeed = 5; // replace with your static wind speed value
    var windChill = 35.74 + 0.6215 * temperature - 35.75 * Math.pow(windSpeed, 0.16) + 0.4275 * temperature * Math.pow(windSpeed, 0.16);
    document.getElementById('weather-box').innerHTML += '<p>Wind Chill: ' + windChill.toFixed(2) + '°F</p>';

    // Display the current year and the date the document was last modified
    var currentYear = new Date().getFullYear();
    document.getElementById('footer').innerHTML = document.getElementById('footer').innerHTML.replace('2024', currentYear);
    document.getElementById('lastModified').textContent = document.lastModified;
}
