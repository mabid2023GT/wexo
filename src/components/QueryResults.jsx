import "../assets/styles/QueryResults.scss";
import { useEffect, useState } from "react";
import { useCitySearch } from "../hooks/useCitySearch";
import { useWeather } from "../hooks/useWeather";
import CircularProgress from "./CircularProgress";
import { useErrorStore } from "../state/ErrorStore";
// Import PropTypes for validation
import PropTypes from "prop-types";

const QueryResults = ({ searchQuery }) => {
  // Use the selected city for weather data fetching
  const [selectedCity, setSelectedCity] = useState(null);
  const {
    data: citySearchResults,
    isLoading: cityLoading,
    error: cityError,
  } = useCitySearch(searchQuery);

  const {
    data: weatherData,
    isLoading: weatherLoading,
    error: weatherError,
  } = useWeather(selectedCity);
  // When called, it sets the error message and makes the error popup visible.
  const triggerError = useErrorStore();

  // Check if weather data is available or citySearchResults is available,
  // Flag to track if a city has been selected and weather data is available
  const isCitySelected = weatherData !== null;

  // Function to handle city click, which selects the city and triggers weather search
  const handleCityClick = (city) => {
    // Select the city
    setSelectedCity(city);
  };

  // Check for errors and trigger the error store's `triggerError` function
  useEffect(() => {
    if (cityError) {
      triggerError(cityError.message);
    }
    if (weatherError) {
      triggerError(weatherError.message);
    }
  }, [cityError, weatherError, triggerError]);

  // Function to render city search results
  const renderCitySearchResults = () => {
    if (!citySearchResults || citySearchResults.length === 0) {
      return <p>No results found. Please try again.</p>;
    }
    return (
      <ul>
        {citySearchResults.map((city, index) => (
          <li
            key={index}
            className={index % 2 === 0 ? "even-row" : "odd-row"}
            onClick={() => handleCityClick(city)}
          >
            - {city.display_name}
          </li>
        ))}
      </ul>
    );
  };

  // Function to render weather search results
  const renderWeatherSearchResults = () => {
    if (!weatherData) return <p>No weather data found. Please try again.</p>;
    return (
      <ul>
        <li key={0} className="even-row">
          Weather in {selectedCity.name}:{" "}
          {weatherData.current_weather.temperature}
          {weatherData.current_weather_units.temperature}
        </li>
        <li key={1} className="odd-row">
          Wind Speed is {weatherData.current_weather.windspeed}{" "}
          {weatherData.current_weather_units.windspeed}
        </li>
      </ul>
    );
  };

  return (
    <div className="query-results">
      <h3>{!isCitySelected ? "Select a city:" : "Weather Results:"}</h3>
      <div className="results-list">
        {cityLoading || weatherLoading ? (
          <div className="circular-progress-wrapper">
            <CircularProgress />
          </div>
        ) : !isCitySelected ? (
          renderCitySearchResults()
        ) : (
          renderWeatherSearchResults()
        )}
      </div>
    </div>
  );
};

export default QueryResults;

// Adding PropTypes validation for the WeatherProvider component
QueryResults.propTypes = {
  // Validate that 'children' is a required prop
  searchQuery: PropTypes.string.isRequired,
};
