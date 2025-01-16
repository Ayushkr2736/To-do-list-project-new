import axios from 'axios';

const API_BASE_URL = 'https://api.openweathermap.org/data/2.5/weather';
const API_KEY = '8b69189fe7a01807c0d5177a6da7696b';

export const fetchWeather = async (location) => {
  try {
    const response = await axios.get(`${API_BASE_URL}?q=${location}&appid=${API_KEY}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching weather data:', error);
    throw error;
  }
};