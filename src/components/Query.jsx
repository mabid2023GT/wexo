import "../assets/styles/Query.scss";
import { useEffect, useState } from "react";
import { useCitySearch } from "../hooks/useCitySearch";
import { useErrorStore } from "../state/ErrorStore";
// Import PropTypes for validation
import PropTypes from "prop-types";
import debounce from 'lodash.debounce';

const Query = ({ searchQuery, setSearchQuery }) => {
  const [isFocused, setIsFocused] = useState(false);
  // Add triggerSearch state
  const [triggerSearch, setTriggerSearch] = useState(false);
  // Use the useCitySearch hook
  const { isLoading: cityLoading, isError, error, isSuccess } = useCitySearch(triggerSearch ? searchQuery : "");

  // When called, it sets the error message and makes the error popup visible.
  const triggerError = useErrorStore();

  useEffect(() => {
    // Reset triggerSearch after a search has been completed (success or error)
    if (isSuccess || isError) {
      setTriggerSearch(false);
    }
    if(isError) {
        triggerError(error.message);
    }
    // This effect will run when the search has finished
  }, [isSuccess, isError]); 

  const handleFocus = () => setIsFocused(true);
  const handleBlur = () => setIsFocused(false);

  // Function to handle search button click
  const handleSearch = () => {
    if (searchQuery.trim()) {
      // Set the triggerSearch state to true to fetch data
      setTriggerSearch(true);
    }
  };

  // Define a debounced function to handle the search query
  const debouncedSearch = debounce((searchQuery) => {
    setSearchQuery(searchQuery);
  }, 
  // 500ms delay after the user stops typing
  500);

  useEffect(() => {
    return () => {
        // Clean up debounced function on unmount
        debouncedSearch.cancel();
    };
  }, []);

  return (
    <>
      <div className={`search-section ${isFocused ? "focused" : ""}`}>
        <input
          type="text"
          placeholder="Enter city name"
          onFocus={handleFocus}
          onBlur={handleBlur}
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>
      <div className="search-button">
        <button onClick={handleSearch} disabled={cityLoading}>
          Search
        </button>
      </div>
    </>
  );
};

export default Query;

// Adding PropTypes validation for the WeatherProvider component
Query.propTypes = {
  // Validate that 'children' is a required prop
  searchQuery: PropTypes.string.isRequired,
  setSearchQuery: PropTypes.func.isRequired,
};
