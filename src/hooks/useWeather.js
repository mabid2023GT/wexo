import { useQuery } from "@tanstack/react-query";
import { fetchWeatherData } from "../services/api-service";

export const useWeather = (selectedCity) => {
    return useQuery({
        // Cache the weather data based on city place_id
        queryKey: ["weather", selectedCity?.place_id],
        // Fetch weather data using latitude and longitude
        queryFn: () => fetchWeatherData(selectedCity.lat, selectedCity.lon),
        // Only fetch if selectedCity exists
        enabled: !!selectedCity,
        // Cache data for 5 minutes
        staleTime: 1000 * 60 * 5,
    });
};