import TopButtons from "./componentes/TopButtons"
import Inputs from './componentes/Inputs'
import TimeAndLocation from './componentes/TimeAndLocation'
import TemperatureAndDetails from './componentes/TemperatureAndDetails'
import Forecast from "./componentes/Forecast"
import getFormattedWeatherData from "./services/weatherService"
import { useState, useEffect } from "react"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {

  const [query,setQuery] = useState({q: "Moscow"})
  const [units,setUnits] = useState("metric")
  const [weather,setWeather] = useState(null)

  useEffect(() => {
    async function fetchWeather(){
      const message = query.q ? query.q : "Ubicación actual..."
      toast.info("Buscando data para " + message)

       await getFormattedWeatherData({...query, units})
        .then((data) => {
          toast.success(`Data de ${data.name}, ${data.country} encontrada`),
          setWeather(data)
        })
        
    }
    fetchWeather()
  },[query,units])

/* IDEA BACKGROUND: si la temperatura es < a 10° 
  *CREAR nuevo threshold* hacer FONDO mas blanco osea MAS FRIO
    threshold2 = units === "metric" ? 10 : 50
    if (weather.temp <= threshold2){
      return "from-cyan-100 to-blue-400"
    } 
    HECHO

  IDEA MAS FORECAST: mostrar MAX y MIN del WEEKLY 
*/
  function formatBackground() {
    const fondoFrio = units === "metric" ? 21 : 70
    const fondoHelado = units === "metric" ? 12 : 50
    if (!weather) {
      return "from-blue-900 to-blue-400"
    }
    if (weather.temp <= fondoHelado){
      return "from-cyan-100 to-blue-400"
    } 
    if(weather.temp <= fondoFrio){
      return "from-blue-900 to-cyan-500"
    } else {
      return "from-orange-500 to-yellow-400"
    }
  }
  return (
    <main className={`bg-gradient-to-br ${formatBackground()} mx-auto max-w-screen-md mt-4 py-5 px-32 h-fit shadow-xl shadow-slate-300`}>
          <TopButtons 
            setQuery= {setQuery}
          />
          <Inputs 
            setQuery= {setQuery} 
            units= {units} 
            setUnits= {setUnits}
          />

          {weather === null ? 
          <h1 className="text-white text-3xl font-medium text-center hover: cursor-wait">Fetching data...</h1> : 
          (<main>  
            <TimeAndLocation weather={weather}/>
            <TemperatureAndDetails weather={weather}/>
            <Forecast text="today's forecast" items={weather.hourly}/>
            <Forecast text="weekly forecast" items={weather.daily}/>
          </main>
          )}
          <ToastContainer autoClose={2000} theme="dark" newestOnTop={true}/>
    </main>
  )
}

export default App
