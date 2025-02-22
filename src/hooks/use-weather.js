import { useState, useEffect } from "react";
import { fetchWeatherData } from "../services/api-service";

export const useWeather = (selectedCity) => {
    const [weatherData, setWeatherData] = useState(null);
    const [weatherLoading, setWeatherLoading] = useState(false);
    const [error, setError] = useState(null);
    const [cachedWeather, setCachedWeather] = useState(null);
    const [cachedCity, setCachedCity] = useState(null);

    useEffect(() => {
        // Do nothing if there's no selected city
        if(!selectedCity) return;

        // a local function that handles the process of fetching the weather data when the selected city changes
        const fetchWeather = async () => {
            // Set loading to true while fetching data
            setWeatherLoading(true);
            // Reset any previous errors
            setError(null);
            // Check cache first to avoid fetching data again
            // If the selected city is the same as the cached city, use the cached data
            if(cachedCity && cachedCity === selectedCity.place_id) {
                // Use cached data if available
                setWeatherData(cachedWeather);
                // Stop loading
                setWeatherLoading(false);
                return;
            }

            try {
                // Get lat and lon from selectedCity
                const { lat, lon } = selectedCity;
                // Call the actual API method
                const data = await fetchWeatherData(lat, lon);
                // Set the fetched weather data
                setWeatherData(data);
                // Cache the selected city
                setCachedCity(selectedCity.place_id);
                // Cache the weather data
                setCachedWeather(data);
            } catch (err) {
                // Set error message if the API call fails
                setError(err.message);
            } finally {
                // Stop loading once the API call completes
                setWeatherLoading(false);
            }
        };
        // Call the fetchWeather function to fetch data if no cached data is available or if city is different
        fetchWeather();
        // Re-run effect if selectedCity, cachedCity, or cachedWeather changes
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [selectedCity]);
    // Return the result
    return { weatherData, setWeatherData, weatherLoading, error };
};