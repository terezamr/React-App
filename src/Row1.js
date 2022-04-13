import React from "react";

export default function Row1(props) {
  return (
    <div>
      <div class="container daily">
        <div class="row">
          <div className="col-2" id="name">
            <b id="city">{props.finalCity}</b>
            <p id="date">{props.date}</p>
          </div>
          
             <div className="col-2">
            <img src={props.finalIcon} width="50" id="mainicon" alt="img" />
            </div>
            <div className="col-2">
            <span id="temperature">{props.finalTemp}</span>
            <span id="units">ºC</span>
          
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
