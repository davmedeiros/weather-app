// This module uses a visible key, this is bad practice for real projects.
//
// Example call:
// https://api.weatherapi.com/v1/current.json?key=433f69d8466b41a9b08135400231508&q=london
const BASE_URL = 'https://api.weatherapi.com/v1';
const CURRENT_WEATHER = '/current.json';
const API_KEY = '433f69d8466b41a9b08135400231508';
const DEFAULT_LOCATION = 'lisbon';

async function getTemperature(location = DEFAULT_LOCATION) {
  const response = await fetch(
    `${BASE_URL}${CURRENT_WEATHER}?key=${API_KEY}&q=${location}`
  );
  const weatherData = await response.json();
  return [weatherData.current.temp_c, weatherData.current.temp_f];
}

export default getTemperature;
