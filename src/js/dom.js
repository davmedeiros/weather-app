import { getTemperature, DEFAULT_LOCATION } from './weather';

const currentTemperatureCelsius = document.querySelector(
  '#current-temperature-celsius'
);
const currentTemperatureFahrenheit = document.querySelector(
  '#current-temperature-fahrenheit'
);
const locationField = document.querySelector('#location');
const locationButton = document.querySelector('#submit-location');
const shownLocation = document.querySelector('#shown-location');

const showTemperature = async (location) => {
  const weather = await getTemperature(location);
  [
    currentTemperatureCelsius.textContent,
    currentTemperatureFahrenheit.textContent,
  ] = weather;
};

const switchLocation = (location) => {
  showTemperature(location);
  shownLocation.textContent = location;
};

const setOnLoadEvents = () => {
  locationButton.addEventListener('click', () => {
    switchLocation(locationField.value);
  });

  locationField.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      locationButton.click();
    }
  });
};

const render = () => {
  setOnLoadEvents();
  switchLocation(DEFAULT_LOCATION);
};

export default render;
