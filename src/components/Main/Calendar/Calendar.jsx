import React, {useState, useContext, useEffect} from 'react';
import {getMonth} from './util'
import CalendarHeader from './FolderComponents/CalendarHeader';
import Sidebar from './FolderComponents/Sidebar';
import Month from './FolderComponents/Month';
import styles from './Calendar.module.css'
import GlobalContext from './Context/GlobalContext';

const Calendar = () => {
  const [currentMonth, setCurrentMonth] = useState(getMonth())

  const {monthIndex} = useContext(GlobalContext)

  useEffect(() => {
    setCurrentMonth(getMonth(monthIndex))
  }, [monthIndex])

  return (

    <div className={styles.mainCalendar}>
      <CalendarHeader />
      <div className={styles.mainContent}>
        <Month month={currentMonth}/>
      </div>
    </div>

  );
}

export default Calendar;
