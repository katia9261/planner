import React from 'react'
import styles from './AddTasks.module.css'
import ButtonAddTask from './ButtonAddTask/ButtonAddTask';
import Inputs from './Inputs/Inputs';
import styled from 'styled-components'

const AddTasksContainer = styled.div`
	display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  height: 100%;
  width: 25%;
	margin-left: 15px;
  border-radius: 0 0 15px 0;
  background-color: #edf0f7;
	padding: 0 10px;

	@media (max-width: 768px) {
		width: 100%;
		margin: 0;
		margin-top: 1px;
		padding: 0;
		border-radius: 0;
	}
`


const AddTasks = () => {
  return (
    <AddTasksContainer>
      <Inputs/>
      {/*<ButtonAddTask/>*/}
    </AddTasksContainer>
  )
}

export default AddTasks;
