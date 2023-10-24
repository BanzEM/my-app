import React, { useState } from "react";
import axios from "axios";
import Card from "./Card";
import Datedisplay from "./Datedisplay";
import DailyForecast from "./DailyForecast";
import "./Weather.css";
import WeatherIcon from "./WeatherIcon";

export default function Weather(props) {
  let [city, setCity] = useState(props.defaultCity);
  let [temperature, setTemperature] = useState({ ready: false });

  function showTemperature(response) {
    setTemperature({
      ready: true,
      coord: response.data.coord,
      city: response.data.name,
      description: response.data.weather[0].description,
      Temperature: response.data.main.temp,
      Humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      icon: response.data.weather[0].icon,
      date: new Date(response.data.dt * 1000),
    });
  }

  function search() {
    let apikey = "a63e0c69093b1d4e3df9e98b9a64478b";
    let units = "metric";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}&units=${units}`;
    axios.get(apiUrl).then(showTemperature);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  let form = (
    <div className="weather-Input">
      <form onSubmit={handleSubmit}>
        <input type="search" placeholder="Enter City" onChange={updateCity} />
        <button>search</button>
      </form>
    </div>
  );

  if (temperature.ready) {
    return (
      <div className="weather">
        {form}
        <h1>{temperature.city}</h1>
        <div>
          <Datedisplay date={temperature.date} />
        </div>
        <div>{temperature.description}</div>
        <div className="container">
          <div className="row">
            <div className="col-6">
              <WeatherIcon code={temperature.icon} size={64} />

              <span>
                <Card celsius={temperature.Temperature} />
              </span>
            </div>
            <div className="col-6">
              <ul>
                <li> Wind:{temperature.wind} km/h</li>
                <li>Humidity:{temperature.Humidity}</li>
              </ul>
            </div>
          </div>
        </div>
        <DailyForecast coordinates={temperature.coord} />
      </div>
    );
  } else {
    search();

    return (
      <div>
        {form} <div>Loading ....</div>
      </div>
    );
  }
}
