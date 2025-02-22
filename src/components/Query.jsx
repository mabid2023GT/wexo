import '../assets/styles/Query.scss';
import {useState} from 'react';
import { useWeatherContext } from '../hooks/use-weather-context';

const Query = () => {
    const [searchQuery, setSearchQuery] = useState('');
    // Access searchCity and loading from context
    const { searchCity, cityLoading } = useWeatherContext();
    const [isFocused, setIsFocused] = useState(false);
    
    // Function to handle search button click
    const handleSearch = () => {
        if(searchQuery) {
            // Trigger city search from context
            searchCity(searchQuery);
            // Clear input after search
            setSearchQuery('');
        }
    }; 

    const handleFocus = () => setIsFocused(true);
    const handleBlur = () => setIsFocused(false);
    
    return (
       <>
            <div className={`search-section ${isFocused ? 'focused' : ''}`}>
                <input 
                    type="text" 
                    placeholder='Enter city name' 
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                />
            </div>
            <div className="search-button">
                <button 
                    onClick={handleSearch}
                    disabled={cityLoading}
                >
                    Search
                </button>
            </div>
       </> 
    );
};

export default Query;