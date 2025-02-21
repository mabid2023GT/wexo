
import '../assets/styles/WeatherPanel.scss';
import Query from '../components/Query';

const WeatherPanel = () => {
    return (
        <div className='panel'>
            <h1 className='title'>Wexo</h1>
            <Query />
      </div>
    );
}

export default WeatherPanel;