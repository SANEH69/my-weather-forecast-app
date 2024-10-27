function displayTemperature(response) {
  let tempElement = document.querySelector("#current-temp");
  let temperature = Math.round(response.data.temperature.current);
  let cityElement = document.querySelector("#current-city");
  cityElement.innerHTML = response.data.city;
  tempElement.innerHTML = temperature;
  console.log(response.data.city);
}

function search(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#search-input-text");
  let city = searchInput.value;

  let apiKey = "04d1784de2be03a1bd2o2db8tf6b23e4";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}`;

  axios.get(apiUrl).then(displayTemperature);
}
let currentTime = new Date();

let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let currentDay = days[currentTime.getDay()];

let currentHour = currentTime.getHours();
let currentMinutes = currentTime.getMinutes();

let span = document.querySelector("p .date");
span.innerHTML = `${currentDay} ${currentHour}:${currentMinutes}`;
