import wexoLogo from '/wexo.svg'
import './App.css'

function App() {

  return (
    <>
      <h1>Wexo</h1>
      <div>
          <img src={wexoLogo} className="logo" alt="Vite logo" />
      </div>
      <p className="read-the-docs">
      Weather App that lets users search for a city, select the correct location from multiple suggestions, and view real-time weather details using Open-Meteo API.
      </p>
    </>
  )
}

export default App
