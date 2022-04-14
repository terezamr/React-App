import React, { useState } from "react";

export default function FormattedDate(props) {
  let newDate = props.date;

  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let list = [];

  let dayw = newDate.getDay();
  let max = 7 - dayw;
  let i = 0;
  for (i = 0; i < max; i++) {
    list[i] = days[dayw + i];
  }
  let f = 0;
  for (i = max; i < 7; i++) {
    list[max + f] = days[f];
    f = f + 1;
  }

  let [offset, setoffset] = useState("");
  let dayw1 = list[0];
  let hour = newDate.getHours();

  console.log(hour);

  console.log(offset);
  let min = newDate.getMinutes();
  let difference = offset - 1;
  hour = hour + difference;
  console.log(hour);
  if (min < 10) {
    min = `0${min}`;
  }
  if (hour < 0) {
    hour = 24 + hour;
    dayw1 = list[6];
  }
  if (hour > 0 && hour < 10) {
    hour = `0${hour}`;
  }
  if (hour > 23) {
    hour = `0${hour - 24}`;
    dayw1 = list[1];
  }

  let showDate = `${dayw1} ${hour}:${min}`;

  return (`${dayw1} ${hour}:${min}`);
}
