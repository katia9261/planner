import React, { useContext } from 'react';
import cn from 'classnames';
import styles from './StylesElements.css';
import GlobalContext from '../Context/GlobalContext';
import dayjs from 'dayjs';

export default function CalendarHeader() {
  const { monthIndex, setMonthIndex } = useContext(GlobalContext);

  function handlePrevMonth() {
    setMonthIndex(monthIndex - 1);
  }

  function handleNextMonth() {
    setMonthIndex(monthIndex + 1);
  }

  function handleReset() {
    setMonthIndex(monthIndex === dayjs().month() ? monthIndex + Math.random() : dayjs().month());
  }

  return (
    <>
      <button className={cn('buttonMonth')} onClick={handlePrevMonth}>
				nxt
			</button>

      <button className={cn('buttonToday')} onClick={handleReset}>
        {dayjs(new Date(dayjs().year(), monthIndex)).format('MMMM YYYY')}
      </button>

      <button className={cn('buttonMonth')} onClick={handleNextMonth}>
        prv
      </button>

      {/*<button className={cn('buttonToday')}>
				{dayjs(new Date(dayjs().year(), monthIndex)).format("MMMM YYYY")}
			</button>*/}
    </>
  );
}
