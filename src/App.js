import React from "react";
import "./App.css";
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Weather defaultCity="Cape Town" />
      </header>
      <a href="https://github.com/BanzEM/my-app.git" target="blank">
        GitHub Url
      </a>
    </div>
  );
}

export default App;
