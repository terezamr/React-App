import React, { useState } from "react";

export default function GetTemp(props) {
  let [unit, setUnit] = useState("Cel");

  function convertFar(event) {
    event.preventDefault();
    setUnit("Far");
  }
  function convertCel(event) {
    event.preventDefault();
    setUnit("Cel");
  }
  if (unit === "Cel") {
    return (
      <div>
        <span id={props.id}> {props.celsius}</span>
        <span id="units">
          ºC
          <a href="/" onClick={convertFar}>
            ºF
          </a>
        </span>
      </div>
    );
  } else {
    let far = Math.round(((props.celsius * (9/5))+32));
    return (
      <div>
        <span id={props.id}> {far}</span>
        <span id="units">
          <a href="/" onClick={convertCel}>
            ºC
          </a>
          ºF
        </span>
      </div>
    );
  }
}
