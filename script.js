function convertTemperature() {
  const InputTemp = document.getElementById("InputTemp").value;
  const a = document.querySelector('option[name="a"]:checked').value;
  const Result = document.getElementById("Result");

  if (a === "Fahrenheit") {
    const Celsius = ((InputTemp - 32) * 5) / 9;
    Result.textContent = `${InputTemp}°F is ${Celsius}°C`;
  } else if (a === "Celsius") {
    const Fahrenheit = (InputTemp * 9) / 5 + 32;
    Result.textContent = `${InputTemp}°C is ${Fahrenheit}°F`;
  }
}
