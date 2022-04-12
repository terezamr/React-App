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
          <Form onSubmit={handleSubmit} />
          <Row1
            city={cityName}
            finalTemp={temp}
            finalIcon={icon}
            finalDesc={desc}
            finalHum={hum}
            finalWind={wind}
            finalFeels={feels}
          />
          <Row2 />
        </div>
      </div>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
