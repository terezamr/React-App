import React from "react";

export default function Row1(props) {
  return (
    <div>
      <div class="container daily">
        <div class="row">
          <div className="col-4" id="name">
            <b id="city">{props.finalCity}</b>
            <p>Saturday</p>
          </div>
          <div className="col " id="temp1">
            {props.finalTemp}ºC
          </div>
          <div class="col-1"></div>
          <div className="col-2 " id="propert">
            Humidity: {props.finalHum}%<p>Wind: {props.finalWind} m/h</p>
            <p>Realfeel: {props.finalFeel} ºC</p>
          </div>
          <div className="col-2" id="propert">
            Min temp: {props.finalMinTemp} ºC
            <p>Max temp: {props.finalMaxTemp} ºC</p>
          </div>
        </div>
      </div>
    </div>
  );
}
