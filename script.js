"use strict";
// states
let currCity = "Bangalore";
let units = "metric";

// HTML Elements Using Selectors
let city = document.querySelector(".secoundary-heading");
let heading = document.querySelector(".primary-heading");
let weatherForecast = document.querySelector(".icon-text");
let minTemp = document.querySelector(".min__temp");
let maxTemp = document.querySelector(".max__temp");
let humidity = document.querySelector(".humidity__one");
let feelsLike = document.querySelector(".feels__like");
let windDegree = document.querySelector(".wind__degree");
let windSpeed = document.querySelector(".wind__speed");
let sunriseTime = document.querySelector(".sunrise__time");
let sunsetTime = document.querySelector(".sunset__time");
let temp = document.querySelector(".temperature__second");
let weatherIcon = document.querySelector(".icon");

// Search
document.querySelector(".weather__city").addEventListener("submit", (e) => {
  let search = document.querySelector(".weather__search");
  e.preventDefault();
  currCity = search.value;
  getWeather();
  search.value = "";
});

function getWeather() {
  const API_KEY = "63aade7eec81710345f966379420190e";

  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${currCity}&units=${units}&appid=${API_KEY}`
  )
    .then((res) => res.json())
    .then((data) => {
      city.innerHTML = `${data.name}`;
      heading.innerHTML = `${data.main.temp.toFixed()}&#176;`;
      weatherForecast.innerHTML = `${data.weather[0].main}`;
      weatherIcon.innerHTML = `<img src="http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png"/>`;
      minTemp.innerHTML = `${data.main.temp_min.toFixed()}&#176`;
      maxTemp.innerHTML = `${data.main.temp_max.toFixed()}&#176`;
      humidity.innerHTML = `${data.main.humidity}%`;
      feelsLike.innerHTML = `${data.main.feels_like.toFixed()}&#176`;
      windDegree.innerHTML = `${data.wind.deg}&#176`;
      windSpeed.innerHTML = `${data.wind.speed} m/s`;
      sunriseTime.innerHTML = `${data.sys.sunrise}`;
      sunsetTime.innerHTML = `${data.sys.sunset}`;
      temp.innerHTML = `${data.main.temp.toFixed()}&#176;`;
    });
}

document.body.addEventListener("load", getWeather());
