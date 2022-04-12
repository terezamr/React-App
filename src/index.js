import React, { useState } from "react";
import ReactDOM from "react-dom";
import Form from "./Form";
import Row1 from "./Row1";
import Row2 from "./Row2";
import axios from "axios";
import "./Box.css";

function App() {
  let [city, setCity] = useState("");
  let [temp, setTemp] = useState("");
  let [wind, setWind] = useState("");
  let [hum, setHum] = useState("");
  let [desc, setDesc] = useState("");
  let [icon, setIcon] = useState("");
  let [feels, setFeels] = useState("");
  let [minTemp, setmintemp] = useState("");
  let [maxTemp, setmaxtemp] = useState("");
  let [cityName, setCityName] = useState("");

  let apiKey = "c1eb44225008106eb8fc583ee3b61e06";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  function handleResponse(response) {
    console.log(response);
    setTemp(Math.round(response.data.main.temp));
    setWind(Math.round(response.data.wind.speed));
    setHum(Math.round(response.data.main.humidity));
    setFeels(Math.round(response.data.main.feels_like));
    setDesc(response.data.weather[0].description);
    setmintemp(Math.round(response.data.main.temp_min));
    setmaxtemp(Math.round(response.data.main.temp_max));
    setFeels(Math.round(response.data.main.feels_like));
    setIcon(
      `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
    );
  }

  function handleSubmit(event) {
    event.preventDefault();
    axios.get(apiUrl).then(handleResponse);
  }
  function updateCity(event) {
    setCity(event.target.value);
    setCityName(event.target.value);
  }

  return (
    <div>
      <div className="App">
        <div className="container1">
          <form class="row" onSubmit={handleSubmit}>
            <div class="column search">
              <input
                autoFocus="off"
                autoComplete="off"
                type="text"
                class="form-control"
                id="inputCity"
                placeholder="Type the place..."
                onChange={updateCity}
              />
            </div>

            <div class="colum butSearch">
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

            <div class="colum butLoc">
              <button id="butC"> Current Location</button>
            </div>
          </form>
          <Row1
            city={cityName}
            finalTemp={temp}
            finalIcon={icon}
            finalDesc={desc}
            finalHum={hum}
            finalWind={wind}
            finalFeels={feels}
            finalMinTemp={minTemp}
            finalMaxTemp={maxTemp}
          />
          <Row2 />
        </div>
      </div>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
