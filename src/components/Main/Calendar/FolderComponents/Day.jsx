import React from "react";
import styles from "./StylesElements.css";
import cn from 'classnames'
import dayjs from "dayjs";

export default function Day({ day, rowIdx }) {
  let getCurrentDayClass = day.format('DD-MM-YY');

  return (
    <div className={cn('days')}>
      <header className={cn('header')}>
        {rowIdx === 0 && (
          <p className={cn('dayOfWeek')}>{day.format("ddd").toUpperCase()}</p>
        )}
        <p className={cn('text', getCurrentDayClass === dayjs().format('DD-MM-YY') ? 'isToday' : '')}>{day.format("DD")}</p>
      </header>
    </div>
  );
}
