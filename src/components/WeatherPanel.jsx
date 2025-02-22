
import '../assets/styles/WeatherPanel.scss';
import Query from '../components/Query';
import QueryResults from '../components/QueryResults';
// import Weather from '../components/Weather';

const WeatherPanel = () => {
    return (
        <div className="panel">
            <div className="title-container">
                <h1 className='title'>Wexo</h1>
            </div>
            <div className="query-container">
                <Query />
            </div>
            <div className="query-results-container">
                <QueryResults />
                {/* <Weather /> */}
            </div>
      </div>
    );
}

export default WeatherPanel;