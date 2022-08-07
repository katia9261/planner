import React from 'react'
import styles from './TodaySchedule.module.css'
import AddTasks from './AddTasks/AddTasks.jsx'
import Schedule from './Schedule/Schedule.jsx'
import styled from 'styled-components'

const MainScheduleContainer = styled.div`
	display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 15px 30px;
  height: 100%;

	@media (max-width: 768px) {
		flex-direction: column;
		margin: 0;
		width: 100%;
	}
`

export default function MainSchedule() {
  return (
    <MainScheduleContainer>
      <Schedule/>
      <AddTasks/>
    </MainScheduleContainer>
  )
}
