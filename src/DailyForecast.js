import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./DailyForecast.css";
import axios from "axios";

export default function DailyForecast(props) {
  function showForecast(response) {
    console.log(response.data);
  }

  let apikey = "a63e0c69093b1d4e3df9e98b9a64478b";
  let latitude = props.cordinates.lon;
  let longitude = props.coordinates.lat;
  let units = "metric";
  let apiUrl = `https://api.openweathermap.org/data/3.0/onecall?lat=${latitude}&lon=${longitude}&appid=${apikey}&units =${units}`;
  axios.get(apiUrl).then(showForecast);

  return (
    <div className="dailyforecast">
      <div className="row">
        <div className="col">
          <div className="forecast-day">Thurs</div>
          <WeatherIcon code="02d" size={36} />
          <div className="forecast-temperature">
            <span className="forecast-max">19/</span>
            <span className="forecast-min">8</span>
          </div>
        </div>
      </div>
    </div>
  );
}
