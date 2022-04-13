import React from "react";

export default function Row1(props) {
  return (
    <div>
      <div class="container daily">
        <div class="row">
          <div className="col-3" id="name">
            <b id="city">{props.finalCity}</b>
            <p>Saturday</p>
          </div>
          <div className="col-3 " id="temp1">
            {props.finalTemp}ºC
          </div>
          <div className="col-1 " id="temp1">
            <img src={props.finalIcon} width="50" id="mainicon"/>
          </div>
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
