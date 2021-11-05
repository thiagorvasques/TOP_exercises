import { getData } from './getData';
import { format, compareAsc } from 'date-fns';
import { convertTZ } from './helper';
import { hu } from 'date-fns/locale';
function displayCityWeather(rawData, city) {
  // first block
  const cityName = document.querySelector('#cityName');
  cityName.textContent = city;
  const weatherStatus = document.querySelector('#weatherStatus');
  weatherStatus.textContent = rawData.current.weather[0].description;
  const todayDate = document.querySelector('#todayDate');
  let dateToFormat = convertTZ(new Date(), rawData.timezone);
  todayDate.textContent = format(dateToFormat, 'EEEE, do MMM yy, h:mm a');
  const cityTemp = document.querySelector('#cityTemp');
  const temp = rawData.current.temp.toString().split('.');
  cityTemp.innerHTML = `${temp[0]}℃`;
  const weatherIcon = document.querySelector('#weatherIcon');
  weatherIcon.src = `https://openweathermap.org/img/wn/${rawData.current.weather[0].icon}@2x.png`;
  //second block
  const feelsLike = document.querySelector('#feelsLike');
  const feels = rawData.current.feels_like.toString().split('.');
  feelsLike.textContent = `${feels[0]}℃`;
  const humidity = document.querySelector('#humidity');
  humidity.textContent = `${rawData.current.humidity}%`;
  const rain = document.querySelector('#rain');
  rain.textContent = `${rawData.daily[0].pop}%`;
  const wind = document.querySelector('#wind');
  const km = Math.floor((rawData.current.wind_speed * (60 * 60)) / 1000);

  wind.textContent = `${km}Km/h`;
  console.log(rawData.current.wind_speed);
}

export { displayCityWeather };
