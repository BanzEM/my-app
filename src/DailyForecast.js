import React, { useState } from "react";
import "./DailyForecast.css";
import axios from "axios";
import ForecastDay from "./ForecastDay";

export default function DailyForecast(props) {
  let [loaded, setloaded] = useState(false);
  let [forecastData, setforecastData] = useState("");

  function showForecast(response) {
    console.log(response.data);
    setforecastData(response.data.daily);
    setloaded(true);
  }

  if (loaded) {
    console.log(forecastData);
    return (
      <div className="dailyforecast">
        <div className="row">
          <div className="col">
            <ForecastDay daysData={forecastData[0]} />
          </div>
        </div>
      </div>
    );
  } else {
    let apikey = "4b3503b2f08a729413c4d33ef1186004";
    let latitude = props.coordinates.lat;
    let longitude = props.coordinates.lon;
    let units = "metric";
    let apiUrl = `https://api.openweathermap.org/data/3.0/onecall?lat=${latitude}&lon=${longitude}&appid=${apikey}&units=${units}`;
    axios.get(apiUrl).then(showForecast);
  }
}
