import React from "react";
import Weather from "./Weather";

export default function Card() {
  return (
    <div className="card">
      <div className="card-body">
        <Weather />
      </div>
      <a href="https://github.com/BanzEM/my-app.git" target="blank">
        GitHub Url
      </a>
    </div>
  );
}
