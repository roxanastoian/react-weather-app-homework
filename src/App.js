import React from "react";
import Weather from "./Weather";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather />
        <footer>
          <p>This project was coded by Roxana Stoian and is</p>
          <a
            href="https://github.com/roxanastoian/react-weather-app-homework"
            target="_blank"
          >
            open-sourced on GitHub.
          </a>
        </footer>
      </div>
    </div>
  );
}
