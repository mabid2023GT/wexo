import { useQuery } from "@tanstack/react-query";
import { fetchCityData } from "../services/api-service";

export const useCitySearch = (query) => {
    console.log("useCitySearch: " + query + " --- " + !!query);
    return useQuery({
        // Cache the city data based on the query
        queryKey: ["city", query],
        // Fetch city data
        queryFn: () => fetchCityData(query),
        // Only fetch if selectedCity exists
        enabled: !!query,
    });
};