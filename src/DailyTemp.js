import React, { useState } from "react";
import axios from "axios";
import WeatherIcon from "./WeatherIcon";

export default function DailyTemp(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecast, setForecast] = useState(null);

  function forecastApp(response) {
    setForecast(response.data.daily);
    setLoaded(true);
    console.log(forecast);
  }

  if (loaded) {
    return (
      <div className="col week">
        {props.day}
        <div>
         
        </div>
        <p>
          19ºC
        </p>
        <p></p>
      </div>
    );
  } else {
    let apiKey = "c1eb44225008106eb8fc583ee3b61e06";
    let latitude = props.latitud;
    let longitude = props.longitud;
 //   let apiUrlFor = `https://api.openweathermap.org/data/2.5/onecall?lat=${props.Latitude}&lon=${props.Longitude}&appid=${apiKey}&units=metric`;
    let apiUrlFor = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}`;
    axios.get(apiUrlFor).then(forecastApp);
    
    return "ola";
  }
}
