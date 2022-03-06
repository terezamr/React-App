import React from "react";

export default function DailyTemp(props) {
  return (
    <div className="column2">
      {props.day}
      <p>{props.temp}ºC</p>
    </div>
  );
}
