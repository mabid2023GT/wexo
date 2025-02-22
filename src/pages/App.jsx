import '../assets/styles/App.scss';
import Header from '../components/Header';
import WeatherPanel from '../components/WeatherPanel';
import Footer from '../components/Footer';

function App() {

  return (
    <div className='app'>
      <Header />
      <WeatherPanel />
      <Footer />
    </div>
  )
}

export default App
