import Searchbar from "./Searchbar";
import "./App.css";
import Dashboard from "./Dashboard";
import { useState, useEffect } from "react";
import { fetchOpenWeather } from "./api/weatherApi";
import PropTypes from 'prop-types';

const API_KEY = process.env.REACT_APP_OPEN_WEATHER_API_KEY;

const App = () => {
  const [weatherData, setWeatherData] = useState({});
  const [city, setCity] = useState("");

  useEffect(() => {
    fetchOpenWeather(city, API_KEY).then((res) => {
      console.log(res);
      setWeatherData(res);
    });
  }, [city]);

  return (
    <div data-testid="app"className="App">
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

App.propTypes = {
  city: PropTypes.string.isRequired,
  weatherData: PropTypes.object,
}


export default App;
