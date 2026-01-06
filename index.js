const toFahrenheit = document.getElementById("toFahrenheit");
const toCelsius = document.getElementById("toCelsius");
const result = document.getElementById("result");
const userInput = document.getElementById("userInput");

let temp;

function convert(event) {
    event.preventDefault(); 

    const value = Number(userInput.value); 

    if (toFahrenheit.checked) {
        temp = (value * 9 / 5) + 32;
        result.textContent = temp.toFixed(1) + "°F";
    }
    else if (toCelsius.checked) {
        temp = (value - 32) * 5 / 9;
        result.textContent = temp.toFixed(1) + "°C";
    }
    else {
        result.textContent = "Select a unit";
    }
}
