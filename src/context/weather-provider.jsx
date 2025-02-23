import { useState } from "react";
import { fetchCityData } from "../services/api-service";
import { useWeather } from "../hooks/use-weather";
import { WeatherContext } from "./weather-context";
import { useErrorStore } from "../state/ErrorStore";

// Import PropTypes for validation
import PropTypes from "prop-types";

// WeatherProvider component wraps around your app to provide context to child components
export const WeatherProvider = ({ children }) => {
  // States to manage city search results and the currently selected city
  // List of cities returned from the search
  const [citySearchResults, setCitySearchResults] = useState([]);
  // State to track loading for city search
  const [cityLoading, setCityLoading] = useState(false);
  // Added state to track if city is selected
  const [citySelected, setCitySelected] = useState(false);
  // The currently selected city
  const [selectedCity, setSelectedCity] = useState(null);
  // Destructuring the weather data, loading state, and error from the useWeather hook
  const { weatherData, setWeatherData, weatherLoading, error } = useWeather(
    citySelected ? selectedCity : null
  );
  // Extracts the triggerError function from the error store.
  // This function is used to display an error message globally by updating the store's state.
  // When called, it sets the error message and makes the error popup visible.
  const triggerError = useErrorStore((state) => state.triggerError);

  // Function to handle city search when the user inputs a query
  const searchCity = async (query) => {
    // Set city search loading to true
    setCityLoading(true);
    // Clear previous weather results when a new search query is executed
    setWeatherData(null);
    try {
      const data = await fetchCityData(query);
      setCitySearchResults(data);
    } catch (err) {
      console.error(err.message);
      triggerError(err.message);
    } finally {
      // Set city search loading to false once done
      setCityLoading(false);
    }
  };

  // Function to set the selected city when the user picks one from the search results
  const selectCity = (city) => {
    // Update the selected city according to city
    setSelectedCity(city);
    // Set the city as selected
    setCitySelected(true);
  };

  // Provide the weather-related state and actions to the children components
  return (
    <WeatherContext.Provider
      value={{
        // The search results from the city query
        citySearchResults,
        // The currently selected city
        selectedCity,
        // The weather data for the selected city
        weatherData,
        // The loading state for the weather data fetch
        weatherLoading,
        // Any errors that occurred during the fetch
        error,
        // Provide cityLoading state to track city search loading
        cityLoading,
        // Function to search for a city
        searchCity,
        // Function to set the selected city
        selectCity,
      }}
    >
      {/* Render children components with access to the WeatherContext */}
      {children}
    </WeatherContext.Provider>
  );
};

// Adding PropTypes validation for the WeatherProvider component
WeatherProvider.propTypes = {
  // Validate that 'children' is a required prop
  children: PropTypes.node.isRequired,
};
