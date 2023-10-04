import React from "react";
import "./App.css";
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Weather defaultCity="Cape Town" />
      </header>
      <div>
        This project is coded by Bandisile Mazomba and is open-sourced on
        <a href="https://github.com/BanzEM/my-app.git" target="blank">
          {""} GitHub
        </a>
      </div>
    </div>
  );
}

export default App;
