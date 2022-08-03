import React from 'react';
import styles from './StylesElements.css';
import cn from 'classnames';
import dayjs from 'dayjs';
import { DayItem } from './DayItem';
import styled from 'styled-components';

const Days = styled.div`
	background-color: #eff0f7;
  height: 99%;
  color: #000;
  width: 99%;
  margin: 0.5px;

	:nth-child(29) {
		border-radius: 0 0 0 15px;
	}
	:last-child {
		border-radius: 0 0 15px 0;
	}

`;

export default function Day({ day, rowIdx, idx }) {
  let getCurrentDayClass = day.format('DD-MM-YY');

  return (
    <Days >
      <header className={cn('header')}>
        {rowIdx === 0 && <p className={cn('dayOfWeek')}>{day.format('ddd').toUpperCase()}</p>}
        <p
          className={cn('text', getCurrentDayClass === dayjs().format('DD-MM-YY') ? 'isToday' : '')}
        >
          {day.format('DD')}
        </p>
      </header>
      <div className={cn('dayItems')}>
        <DayItem name={'simple day'} time={'12:00'} color={'#ff0000'} />
        <DayItem name={'simple day'} time={'12:00'} color={'#ffff00'} />
        <DayItem name={'simple day'} time={'12:00'} color={'#ff00ff'} />
      </div>
    </Days>
  );
}
