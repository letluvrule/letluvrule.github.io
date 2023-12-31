const weather = document.querySelector('#weather span:first-child');
const city = document.querySelector('#weather span:last-child');

const API_KEY = '313a2ab42794f30e7117f63e5f713cad';

function onGeoOk(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  const weatherData = fetch(url)
    .then((response) => response.json())
    .then((data) => {
      city.innerText = data.name;
      weather.innerText = `날씨 : ${data.weather[0].main}  
      기온 : ${data.main.temp}도 
      위치 : `;
    });
  weatherData();
}
function onGeoError() {
  alert("Can't find you. No weather for you.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
