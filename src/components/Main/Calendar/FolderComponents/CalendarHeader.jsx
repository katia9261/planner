import React, {useContext} from 'react'
import cn from 'classnames'
import styles from './StylesElements.css'
import {ReactComponent as ArrowSvg } from '../../../../assets/3994400_arrow_forward_navigation_next_right_icon.svg'
import GlobalContext from './../Context/GlobalContext';
import dayjs from 'dayjs';

export default function CalendarHeader() {
  const {monthIndex, setMonthIndex} = useContext(GlobalContext)

  function handlePrevMonth() {
    setMonthIndex(monthIndex - 1)
  }

  function handleNextMonth() {
    setMonthIndex(monthIndex + 1)
  }

  function handleReset() {
    setMonthIndex(
      monthIndex === dayjs().month()
        ? monthIndex + Math.random()
        : dayjs().month()
    );
  }

  return (
    <header className={cn('headerTable')}>

      <button className={cn('buttonMonth')} onClick = {handlePrevMonth}>
        <ArrowSvg />
      </button>

      <button className={cn('buttonToday')} onClick={handleReset}>
        {dayjs(new Date(dayjs().year(), monthIndex)).format("MMMM YYYY")}
      </button>

      <button className={cn('buttonMonth')} onClick = {handleNextMonth}>
        <p> </p>
      </button>

      {/*<button className={cn('buttonToday')}>
      {dayjs(new Date(dayjs().year(), monthIndex)).format("MMMM YYYY")}
  </button>*/}

    </header>
  )
}
