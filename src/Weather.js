import React, { useState } from "react";
import axios from "axios";

export default function Weather() {
  let [city, setCity] = useState("");
  let [temperature, setTemperature] = useState("");

  function showTemperature(response) {
    setTemperature({
      Temperature: response.data.main.temp,
      Humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      icon: `https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
    });
    //alert(response.data.main.temp);
    //console.log(response.data);
  }

  function handleSubmit(event) {
    event.preventDefault();
    let apikey = "a63e0c69093b1d4e3df9e98b9a64478b";
    let units = "metric";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}&units=${units}`;
    axios.get(apiUrl).then(showTemperature);
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

  if (temperature) {
    return (
      <div>
        {form}
        <ul>
          <li>Temperature:{Math.round(temperature.Temperature)} °C</li>
          <li> Wind:{temperature.wind} km/h</li>
          <li>Humidity:{temperature.Humidity}</li>
          <li>
            <img src={temperature.icon} alt="icon" />
          </li>
        </ul>
      </div>
    );
  } else {
    return form;
  }
}
