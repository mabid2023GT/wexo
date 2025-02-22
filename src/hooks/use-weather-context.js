import { useContext } from "react";
import { WeatherContext } from "../context/weather-context";

// Custom hook to use the WeatherContext, allowing components to access the context data
export const useWeatherContext = () => useContext(WeatherContext);