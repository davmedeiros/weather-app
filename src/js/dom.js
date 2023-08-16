import getTemperature from './weather';

const currentTemperatureCelsius = document.querySelector(
  '#current-temperature-celsius'
);
const currentTemperatureFahrenheit = document.querySelector(
  '#current-temperature-fahrenheit'
);

const showTemperature = async (location) => {
  const weather = await getTemperature(location);
  [
    currentTemperatureCelsius.textContent,
    currentTemperatureFahrenheit.textContent,
  ] = weather;
};

const render = () => {
  showTemperature();
};

export default render;
