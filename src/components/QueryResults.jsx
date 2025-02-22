import '../assets/styles/QueryResults.scss';

const cities = [
    "London, Greater London, England, United Kingdom",
    "London, Southwestern Ontario, Ontario, Canada",
    "New York, New York, United States",
    "Paris, Île-de-France, France",
    "Tokyo, Tokyo Prefecture, Japan",
    "Berlin, Berlin, Germany",
    "Sydney, New South Wales, Australia",
    "London, Greater London, England, United Kingdom",
    "London, Southwestern Ontario, Ontario, Canada",
    "New York, New York, United States",
    "Paris, Île-de-France, France",
    "Tokyo, Tokyo Prefecture, Japan",
    "Berlin, Berlin, Germany",
    "Sydney, New South Wales, Australia"
];

const QueryResults = () => {
    return (
        <div className='query-results'>
            <h3>Select a city:</h3>
            <div className="results-list">
                <ul>
                    {cities.map((city, index) => (
                        <li key={index} className={index % 2 === 0 ? "even-row" : "odd-row"}>
                            - {city}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default QueryResults;