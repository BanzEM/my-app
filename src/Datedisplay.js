import React from "react";

export default function Datedisplay(props) {
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  let day = days[props.date.getDay()];
  let hours = props.date.getHours();
  if (hours < 10) {
    hours = `0${hours}`;
  }
  let minutes = props.date.getMinutes();

  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  return (
    <div>
      <div className="row">
        <div className="col-6">
          <h3>{day}</h3>
        </div>

        <div className="col-6">
          <h3>
            {hours}:{minutes}
          </h3>
        </div>
      </div>
    </div>
  );
}
