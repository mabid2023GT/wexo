import '../assets/styles/Query.scss';
import {useState} from 'react';

const Query = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [isFocused, setIsFocused] = useState(false);
    
    // Function to handle search button click
    const handleSearch = () => {
        if(searchQuery) {
            // TO-DO: Trigger fetchWeather to get results
            setSearchQuery('');
        }
    }; 

    const handleFocus = () => setIsFocused(true);
    const handleBlur = () => setIsFocused(false);
    
    return (
       <div className="query-container">
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
                <button onClick={handleSearch}>
                    Search
                </button>
            </div>
       </div> 
    );
};

export default Query;