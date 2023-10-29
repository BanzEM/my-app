import React, { useState, useEffect } from "react";
import "./DailyForecast.css";
import axios from "axios";
import ForecastDay from "./ForecastDay";

export default function DailyForecast(props) {
  let [loaded, setloaded] = useState(false);
  let [forecastData, setforecastData] = useState("");

  function showForecast(response) {
    setforecastData(response.data.daily);
    setloaded(true);
  }

  useEffect(() => {
    setloaded(true);
  }, [props.coordinates]);

  if (loaded) {
    return (
      <div className="dailyforecast">
        <div className="row">
          {forecastData.map(function (nextDayForecast, index) {
            if (index < 6) {
              return (
                <div className="col" key={index}>
                  <ForecastDay daysData={nextDayForecast} />
                </div>
              );
            }
          })}
        </div>
      </div>
    );
  } else {
    let apikey = "4b3503b2f08a729413c4d33ef1186004";
    let latitude = props.coordinates.lat;
    let longitude = props.coordinates.lon;
    let units = "metric";
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apikey}&units=${units}`;
    axios.get(apiUrl).then(showForecast);
  }
}
