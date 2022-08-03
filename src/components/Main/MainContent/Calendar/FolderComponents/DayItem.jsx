import React from 'react'
import styled from 'styled-components'

const DayItemContainer = styled.div`
	width: 100%;
	height: 20px;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	&:hover {
		background-color: ${props => props.color};
		border-radius: 5px;
	}
`
const CircleTag = styled.div`
	width: 10px;
	height: 10px;
	border-radius: 10px;
	background-color: ${props => props.color};
	margin: 0 5px;
`;

const TaskName = styled.p`
	width: 100%;
	white-space: nowrap; /* Запрещаем перенос строк */
    text-overflow: clip; /* Добавляем многоточие */
`;

const TaskTime = styled.h5`
	width: 100%;
	font-size: 8px;
`;

export const DayItem = ({name, time, color}) => {
	return (
		<DayItemContainer color={color} >
			<CircleTag color={color} />
			<TaskName>{name}</TaskName>
			<TaskTime>{time}</TaskTime>
		</DayItemContainer>
	)
}
