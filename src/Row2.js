import React from "react";
import DailyTemp from "./DailyTemp";

export default function Row2() {
  return (
    <div>
      <div className="row">
        <DailyTemp day="Sunday" temp="20" />
        <DailyTemp day="Monday" temp="19" />
        <DailyTemp day="Tuesday" temp="18" />
        <DailyTemp day="Wednesday" temp="22" />
        <DailyTemp day="Thursday" temp="17" />
      </div>
    </div>
  );
}
