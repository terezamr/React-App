import axios from "axios";
import React, { useState } from "react";
import ReactDOM from "react-dom";
import DailyTemp from "./DailyTemp";
import Row1 from "./Row1";
import "bootstrap/dist/css/bootstrap.css";

import "./Box.css";

function App() {
  let newDate = new Date();

  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let list = [];

  let dayw = newDate.getDay();
  let max = 7 - dayw;
  let i = 0;
  for (i = 0; i < max; i++) {
    list[i] = days[dayw + i];
  }
  let f = 0;
  for (i = max; i < 7; i++) {
    list[max + f] = days[f];
    f = f + 1;
  }

  let [offset, setoffset] = useState("");
  let dayw1 = list[0];
  let hour = newDate.getHours();
  let min = newDate.getMinutes();
  let difference = offset - 1;
  hour = hour + difference;
  if (min < 10) {
    min = `0${min}`;
  }
  if (hour < 0) {
    hour = 24 + hour;
    dayw1 = list[6];
  }
  if (hour > 0 && hour < 10) {
    hour = `0${hour}`;
  }
  if (hour > 23) {
    hour = `0${hour - 24}`;
    dayw1 = list[1];
  }

  let showDate = `${dayw1} ${hour}:${min}`;
  const [ready, setReady] = useState(false);
  const [city, setCity] = useState("Lisbon");
  const [finalcity, setFinalCity] = useState("");
  let [temp, setTemp] = useState("");
  let [wind, setWind] = useState("");
  let [hum, setHum] = useState("");
  let [des, setDes] = useState("");
  let [minTemp, setminTemp] = useState("");
  let [maxTemp, setmaxTemp] = useState("");
  let [feels, setFeels] = useState("");
  let [icon, setIcon] = useState("");
  let [lat, setLat] = useState("");
  let [lon, setLon] = useState("");

  let apiKey = "c1eb44225008106eb8fc583ee3b61e06";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  function handleResponse(response) {
    setReady(true);
    setCity(response.data.name);
    setFinalCity(city);
    setTemp(Math.round(response.data.main.temp));
    setWind(Math.round(response.data.wind.speed));
    setHum(Math.round(response.data.main.humidity));
    setDes(response.data.weather[0].description);
    setminTemp(Math.round(response.data.main.temp_min));
    setmaxTemp(Math.round(response.data.main.temp_max));
    setFeels(Math.round(response.data.main.feels_like));
    setoffset(response.data.timezone / 3600);
    setIcon(response.data.weather[0].icon);
    setLat(response.data.coord.lat);
    setLon(response.data.coord.lon);
  }

  function handleSubmit(event) {
    event.preventDefault();
    axios.get(apiUrl).then(handleResponse);
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  function search() {
    let apiKey = "c1eb44225008106eb8fc583ee3b61e06";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=Lisbon&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }

  if (ready) {
    return (
      <div>
        <div className="App">
          <div className="container1">
            <form className="row" onSubmit={handleSubmit}>
              <div className="column search">
                <input
                  type="search"
                  placeholder="Enter a city.."
                  className="form-control"
                  autoFocus="on"
                  id="inputCity"
                  onChange={updateCity}
                />
              </div>

              <div className="colum butSearch">
                <button id="butC">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-search"
                    viewBox="0 0 16 16"
                  >
                    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                  </svg>
                </button>
              </div>

              <div className="colum butLoc">
                <button id="butC"> Current Location</button>
              </div>
            </form>
            <div className="row">
              <Row1
                finalCity={finalcity}
                finalTemp={temp}
                finalHum={hum}
                finalWind={wind}
                finalFeel={feels}
                finalMinTemp={minTemp}
                finalMaxTemp={maxTemp}
                date={showDate}
                finalIcon={icon}
                finalDes={des}
              />
            </div>
            <div class="container weekly">
                <DailyTemp
                  latitud={lat}
                  longitud={lon}
                  days={list}
                />
            </div>
          </div>
        </div>
        <footer>
          Project coded by Tereza Melo Ribeiro and is{" "}
          <a
            href="https://github.com/terezamr/React-App"
            target="_blank"
            rel="noopener noreferrer"
          >
            open-sourced on GitHub
          </a>{" "}
          and{" "}
          <a
            href="https://velvety-starburst-afe01c.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            hosted on Netlify
          </a>
        </footer>
      </div>
    );
  } else {
    search();
    return "Loading...";
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
