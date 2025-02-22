/* eslint-disable no-useless-catch */

// Private constants (cannot be accessed outside)
const OSM_API_URL = "https://nominatim.openstreetmap.org/search?q={city}&format=json";
const WEATHER_API_URL = "https://api.open-meteo.com/v1/forecast?latitude={lat}&longitude={lon}&current_weather=true";

const fetchCityData = async (city) => {
    try {
        const url = OSM_API_URL.replace("{city}", city);
        const response = await fetch(url);
        if(!response.ok) {
            throw new Error('City data fetch failed');
        }
        return await response.json();
    } catch (error) {
        throw new Error(`Error fetching city data: ${error.message}`);
    }
};

const fetchWeatherData = async (lat, lon) => {
    try {
        const url = WEATHER_API_URL.replace("{lat}", lat).replace("{lon}", lon);
        const response = await fetch(url);
        if(!response.ok) {
            throw new Error('Failed to fetch weather data');
        }
        return await response.json();
    } catch(error) {
        throw error;
    }
};

export {fetchCityData, fetchWeatherData};