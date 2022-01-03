import Searchbar from "./Searchbar";
import "./App.css";
import Dashboard from "./Dashboard";
import { useState } from "react";

const API_KEY = process.env.REACT_APP_OPEN_WEATHER_API_KEY;

function App() {
  const [city, setCity] = useState("");
  const [desc, setDesc] = useState("");
  const [icon, setIcon] = useState("");

  const getData = (city) => {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setCity(data.name);
        setDesc(data.weather[0].description);
        setIcon(data.weather[0].icon);
        console.log(city, desc, icon);
      });
  };

  return (
    <div className="App">
      {/* <header className="App-header">
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <button onClick={getWeather}>Click for weather description!</button>
      </header> */}
      <div className="center">
        <Searchbar callback={getData} />
        <Dashboard city={city} desc={desc} icon={icon} />
      </div>
    </div>
  );
}

export default App;
