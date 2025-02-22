import '../assets/styles/QueryResults.scss';
import { useWeatherContext } from '../hooks/use-weather-context';
import CircularProgress from './CircularProgress';

const QueryResults = () => {
    // Access context data
    // const { citySearchResults, selectCity, weatherData, loading, error, selectedCity } = useWeatherContext();
    const {citySearchResults, selectedCity, selectCity, weatherData, cityLoading } = useWeatherContext();

    // Check if weather data is available or citySearchResults is available,
    // Flag to track if a city has been selected and weather data is available
    const isCitySelected  = weatherData !== null;

    // Function to handle city click, which selects the city and triggers weather search
    const handleCityClick = (city) => {
        // Select the city
        selectCity(city); 
    };

    // Function to render city search results
    const renderCitySearchResults = () => {
        if(citySearchResults.length === 0) {
            return <p>No results found. Please try again.</p>;
        }
        return (
            <ul>
                {
                    citySearchResults.map((city, index) => (
                        <li 
                            key={index} 
                            className={index % 2 === 0 ? "even-row" : "odd-row"}
                            onClick={() => handleCityClick(city)}
                        >
                            - {city.display_name}
                        </li>
                    ))
                }
            </ul>
        );
    };

    // Function to render weather search results
    const renderWeatherSearchResults = () => {
        return (
            <ul>
                <li key={0} className="even-row">
                    Weather in {selectedCity.name}: {weatherData.current_weather.temperature}{weatherData.current_weather_units.temperature}
                </li>
                <li key={1} className="odd-row">
                    Wind Speed is {weatherData.current_weather.windspeed} {weatherData.current_weather_units.windspeed}
                </li>
            </ul>
        );
    }

    return (
        <div className='query-results'>
            <h3>
                {!isCitySelected ? "Select a city:" : "Weather Results:"}
            </h3>
            <div className="results-list">
                {
                    cityLoading ? 
                        <div className="circular-progress-wrapper"> 
                            <CircularProgress /> 
                        </div> 
                    : (
                        !isCitySelected ? renderCitySearchResults() : renderWeatherSearchResults()
                    )
            
                }
            </div>
        </div>
    );
};

export default QueryResults;