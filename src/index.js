function refreshTemperature(response) {
  let temperatureElement = document.querySelector("#temperature");
  let temperature = Math.round(response.data.temperature.current);
  let cityElement = document.querySelector("#city");
  let descriptionElement = document.querySelector("#description");
  let humidityElement = document.querySelector("#Humidity");
  let windSpeedElement = document.querySelector("#wind-speed");

  cityElement.innerHTML = response.data.city;
  temperatureElement.innerHTML = temperature;
  descriptionElement.innerHTML = response.data.condition.description;
  humidityElement.innerHTML = `${response.data.temperature.humidity}%`;
  windSpeedElement.innerHTML = `${response.data.wind.speed}km/h`;
}

function searchCity(city) {
  let key = "caccbbtca33o481dda0074f34f777ffb";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${key}`;
  console.log(apiUrl);
  axios.get(apiUrl).then(refreshTemperature);
}

function handleSearch(event) {
  event.preventDefault();
  let searchValue = document.querySelector("#search-value");

  searchCity(searchValue.value);
}

let searchFormElement = document.querySelector("#search-form");
searchFormElement.addEventListener("submit", handleSearch);

searchCity("Paris");
