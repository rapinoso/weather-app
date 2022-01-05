import Searchbar from "./Searchbar";
import "./App.css";
import Dashboard from "./Dashboard";
import { useState, useEffect } from "react";
import { fetchOpenWeather } from "./api/weatherApi";

const API_KEY = process.env.REACT_APP_OPEN_WEATHER_API_KEY;

function App() {
  const [weatherData, setWeatherData] = useState({});
  const [city, setCity] = useState(null);

  useEffect(() => {
    fetchOpenWeather(city, API_KEY).then((res) => {
      console.log(res);
      setWeatherData(res);
    });
  }, [city]);

  return (
    <div className="App">
      <div className="center">
        <Searchbar
          callback={fetchOpenWeather}
          onCityChange={(e) => {
            setCity(e.target.value);
          }}
        />
        <Dashboard data={weatherData} />
      </div>
    </div>
  );
}

export default App;
