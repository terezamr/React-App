import React, { useEffect, useState } from "react";
import axios from "axios";
import WeatherIcon from "./WeatherIcon";

export default function DailyTemp(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecast, setForecast] = useState(null);

  useEffect(() => {
    setLoaded(false);
  }, [props.latitud]);

  function forecastApp(response) {
    setForecast(response.data.daily);
    console.log(response.data);
    setLoaded(true);
  }

  if (loaded) {
    return (
      <div className="row">
        {" "}
        <div className="col week">
          {props.days[1]}
          <div>
            <WeatherIcon
              size="25"
              code={forecast[1].weather[0].icon}
              animation="false"
            />
          </div>
          <p>
            {Math.round(forecast[1].temp.max)}ºC |{" "}
            {Math.round(forecast[1].temp.min)}ºC
          </p>
          <p></p>
        </div>
        <div className="col week">
          {props.days[2]}
          <div>
            <WeatherIcon
              size="25"
              code={forecast[2].weather[0].icon}
              animation="false"
            />
          </div>
          <p>
            {Math.round(forecast[2].temp.max)}ºC |{" "}
            {Math.round(forecast[2].temp.min)}ºC
          </p>
          <p></p>
        </div>
        <div className="col week">
          {props.days[3]}
          <div>
            <WeatherIcon
              size="25"
              code={forecast[3].weather[0].icon}
              animation="false"
            />
          </div>
          <p>
            {Math.round(forecast[3].temp.max)}ºC |{" "}
            {Math.round(forecast[3].temp.min)}ºC
          </p>
          <p></p>
        </div>
        <div className="col week">
          {props.days[4]}
          <div>
            <WeatherIcon
              size="25"
              code={forecast[4].weather[0].icon}
              animation="false"
            />
          </div>
          <p>
            {Math.round(forecast[4].temp.max)}ºC |{" "}
            {Math.round(forecast[4].temp.min)}ºC
          </p>
          <p></p>
        </div>
        <div className="col week">
          {props.days[5]}
          <div>
            <WeatherIcon
              size="25"
              code={forecast[5].weather[0].icon}
              animation="false"
            />
          </div>
          <p>
            {Math.round(forecast[5].temp.max)}ºC |{" "}
            {Math.round(forecast[5].temp.min)}ºC
          </p>
          <p></p>
        </div>
      </div>
    );
  } else {
    let apiKey = "c1eb44225008106eb8fc583ee3b61e06";
    let latitude = props.latitud;
    let longitude = props.longitud;
    let apiUrlFor = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;
    axios.get(apiUrlFor).then(forecastApp);

    return null;
  }
}
