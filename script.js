const celsius = document.getElementById("celsius");
const fahrenheit = document.getElementById("fahrenheit");
const kelvin = document.getElementById("kelvin");

function roundNumber(num) {
    return Math.round(num * 100) / 100;
}

// Celsius input
celsius.addEventListener("input", function() {
    let c = parseFloat(celsius.value);
    if (!isNaN(c)) {
        fahrenheit.value = roundNumber((c * 9/5) + 32);
        kelvin.value = roundNumber(c + 273.15);
    }
});

// Fahrenheit input
fahrenheit.addEventListener("input", function() {
    let f = parseFloat(fahrenheit.value);
    if (!isNaN(f)) {
        celsius.value = roundNumber((f - 32) * 5/9);
        kelvin.value = roundNumber((f - 32) * 5/9 + 273.15);
    }
});

// Kelvin input
kelvin.addEventListener("input", function() {
    let k = parseFloat(kelvin.value);
    if (!isNaN(k)) {
        celsius.value = roundNumber(k - 273.15);
        fahrenheit.value = roundNumber((k - 273.15) * 9/5 + 32);
    }
});
