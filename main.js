//FARHAD RAHMANI
let submit = document.getElementById("button");
let celsius = document.getElementById("celsius");
let fahrenhit = document.getElementById("fahrenhit");

submit.onclick = function() {
    let temperature = Number(document.getElementById("input").value);
    let result = document.getElementById("result");

    if (isNaN(temperature)) {
        result.textContent = "⚠️ Please enter a valid number!";
        return;
    }

    if (celsius.checked) {
        let fahrenhit_Temperature = (temperature * 9/5) + 32;
        result.textContent = `${fahrenhit_Temperature.toFixed(2)} °F`;
    } 
    else if (fahrenhit.checked) {
        let celsius_temperature = (temperature - 32) * 5/9;
        result.textContent = `${celsius_temperature.toFixed(2)} °C`;
    } 
    else {
        result.textContent = "⚠️ Please select a conversion type!";
    }
};
