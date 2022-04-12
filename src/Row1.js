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
          Humidity: {props.finalHum}%<p>Wind: {props.finalWind} m/h</p>
          <p>Realfeel: {props.finalFeel} ºC</p>
        </div>
        <div className="column" id="propert">
          Min temp: {props.finalMinTemp} ºC
          <p>Max temp: {props.finalMaxTemp} ºC</p>
        </div>
      </div>
    </div>
  );
}
