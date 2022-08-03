import React, {useState, useContext, useEffect} from 'react';
import {getMonth} from './util'
import CalendarHeader from './FolderComponents/CalendarHeader';
import Sidebar from './FolderComponents/Sidebar';
import Month from './FolderComponents/Month';
import GlobalContext from './Context/GlobalContext';
import ContextWrapper from './Context/ContextWrapper';
import styled from 'styled-components';

const MonthContrainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	background-color: #edf0f7;
	display: flex;
  justify-content: space-between;
  margin: 15px 30px;
  height: 100%;
`;

const Calendar = () => {
  const [currentMonth, setCurrentMonth] = useState(getMonth())

  const {monthIndex} = useContext(GlobalContext)

  useEffect(() => {
    setCurrentMonth(getMonth(monthIndex))
  }, [monthIndex])

  return (
		<MonthContrainer>
			<Month month={currentMonth}/>
		</MonthContrainer>
  );
}

export default Calendar;
