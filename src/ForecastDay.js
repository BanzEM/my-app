import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function ForecastDay(props) {
  function maxTemperature() {
    let temperature = Math.round(props.daysData.temp.max);
    return `${temperature}`;
  }

  function minTemperature() {
    let temperature = Math.round(props.daysData.temp.min);
    return `${temperature}`;
  }

  function day() {
    let date = new Date(props.daysData.dt * 1000);
    let day = date.getDay();

    let days = ["Sun", "Mon", "Tues", "Wed", "Thur", "Fri", "Sat"];
    return days[day];
  }

  return (
    <div>
      <div className="forecast-day">
        <h5>{day()}</h5>
      </div>
      <WeatherIcon code={props.daysData.weather[0].icon} size={36} />
      <div className="forecast-temperature">
        <span className="forecast-max">{maxTemperature()} °/</span>
        <span className="forecast-min">{minTemperature()} °</span>
      </div>
    </div>
  );
}
