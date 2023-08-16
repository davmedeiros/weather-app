import getTemperature from './weather';

const currentTemperatureCelsius = document.querySelector(
  '#current-temperature-celsius'
);
const currentTemperatureFahrenheit = document.querySelector(
  '#current-temperature-fahrenheit'
);
const locationField = document.querySelector('#location');
const locationButton = document.querySelector('#submit-location');

const showTemperature = async (location) => {
  const weather = await getTemperature(location);
  [
    currentTemperatureCelsius.textContent,
    currentTemperatureFahrenheit.textContent,
  ] = weather;
};

const switchLocation = () => {
  showTemperature(locationField.value);
};

const setOnLoadEvents = () => {
  locationButton.addEventListener('click', switchLocation);
  locationField.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      locationButton.click();
    }
  });
};

const render = () => {
  setOnLoadEvents();
  showTemperature();
};

export default render;
