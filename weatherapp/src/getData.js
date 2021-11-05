import { displayCityWeather } from './loadData';
// 8cb9bc19681d6298a9d870d882c1da33
let city = '';
let lat = '';
let lon = '';
async function getLatLong(city) {
  try {
    const response = await fetch(
      `https://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=8cb9bc19681d6298a9d870d882c1da33`,
      { mode: 'cors' }
    );
    const rawData = await response.json();
    console.log(response);
    console.log(rawData);
    lat = await rawData[0].lat;
    lon = await rawData[0].lon;
    console.log(lat, lon);
    getData(lat, lon, city);
  } catch (err) {
    alert('City not found');
  }
}

async function getData(lat, lon, city) {
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=minutely,alerts&units=metric&appid=8cb9bc19681d6298a9d870d882c1da33`,
    { mode: 'cors' }
  );
  const rawData = await response.json();
  displayCityWeather(rawData, city);
}

function setCity(e) {
  e.preventDefault();
  city === '' ? (city = 'Porto') : (city = e.path[0][0].value);
  getLatLong(city);
}

export { getData, getLatLong, setCity };
