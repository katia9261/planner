import React from "react";
import Day from "./Day";
import cn from "classnames";

export default function Month({ month }) {
  return (
    <div className={cn('month')}>
      {month.map((row, i) => (
        <React.Fragment key={i}>
          {row.map((day, idx) => (
            <Day day={day} key={idx} rowIdx={i} idx={i} />
          ))}
        </React.Fragment>
      ))}
    </div>
  );
}