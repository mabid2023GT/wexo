import '../assets/styles/Weather.scss';


const Weather = () => {
    return (
        <div className="weather-container">
            <h3>Results</h3>
            <div className="result-container">
                <div className="temperature-container">
                    Weather in : 12.9°C
                </div>
                <div className="wind-container">
                    Wind Speed is 21.3 km/h
                </div>
            </div>
        </div>
    );
};

export default Weather;