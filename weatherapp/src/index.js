require('./styles.css');
import { getData, getLatLong, setCity } from './getData';

window.onload = (e) => {
  setCity(e);
};

const form = document.querySelector('form');
form.addEventListener('submit', (e) => {
  setCity(e);
});
