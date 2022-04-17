import React from "react";
import WeatherIcon from "./WeatherIcon";
import GetTemp from "./GetTemp";

export default function Row1(props) {
  return (
    <div>
      <div class="container daily">
        <div class="row">
          <div className="col-3" id="name">
            <b id="city">{props.finalCity}</b>
            <p id="maininfo">{props.date}</p>
            <p id="maininfo">{props.finalDes}</p>
          </div>

          <div className="col-2" id="secondcol">
            <WeatherIcon
              code={props.finalIcon}
              id="mainicon"
              alt="img"
              size="52"
              animation="true"
            />
          </div>
          <div className="col-2" id="thirdcol">
            <GetTemp celsius={props.finalTemp} id="temperature" />
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
