import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./DailyForecast.css";

export default function DailyForecast() {
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
