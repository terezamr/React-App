import React from "react";

export default function DailyTemp(props) {
  return (
    <div className="column2">
      {props.day}
      <p>
        {props.tempmax}ºC | {props.tempmin}ºC{" "}
      </p>
      <p></p>
    </div>
  );
}
