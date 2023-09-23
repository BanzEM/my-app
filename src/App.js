import React from "react";
import "./App.css";
import Weather from "./Weather";
import Card from "./Card";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Card>
          <Weather />
        </Card>
      </header>
    </div>
  );
}

export default App;
