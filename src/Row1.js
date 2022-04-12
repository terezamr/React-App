import React from "react";

export default function Row1(props) {
  return (
    <div>
      <div className="row">
        <div className="column1">
          <b id="city">{props.city}</b>
          <p>Saturday</p>
        </div>
        <div className="column1" id="temp1">
          {props.finalTemp}ºC
        </div>
        <div class="column three"></div>
        <div className="column" id="propert">
          Humidity: {props.finalHum}%<p>Precipitation: {props.finalPrec}%</p>
        </div>
        <div className="column" id="propert">
          Wind: {props.finalWind}km/h
          <p>Realfeel: {props.finalFeels}ºC</p>
        </div>
      </div>
    </div>
  );
}
