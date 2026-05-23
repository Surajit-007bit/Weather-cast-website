const button = document.getElementById("getWeather");
const result = document.getElementById("result");
const API_KEY = "d69208de9036454c8dd134840250310";

button.addEventListener("click", async () => {
  const city = document.getElementById("city").value;

  if (!city) {
    result.textContent = "Please enter a city name!";
    return;
  }

  try {
    const response = await fetch(`http://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${city}&aqi=no`);
    if (!response.ok) throw new Error("City not found");

    const data = await response.json();

    result.innerHTML = `
      <strong>${data.location.name}</strong><br>
      Temperature: ${data.current.temp_c}°C<br>
      Wind Speed: ${data.current.wind_kph} kph<br>
      Humidity: ${data.current.humidity}%
    `;
  } catch (error) {
    result.textContent = "Error: " + error.message;
  }
});
