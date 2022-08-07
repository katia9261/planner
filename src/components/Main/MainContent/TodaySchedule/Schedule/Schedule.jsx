import React from 'react';
import styles from './Schedule.module.css';
import TableScheduleHeader from './TableScheduleHeader/TableScheduleHeader';
import TableSchedule from './TableSchedule/TableSchedule';
import styled from 'styled-components';

const SheduleContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 75%;
  background-color: #edf0f7;
  border-radius: 0 0 0 15px;

  @media (max-width: 768px) {
    width: 100%;
    border-radius: 0;
  }
`;

const ContentShedule = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  height: 100%;
  width: 100%;
`;

export default function Schedule() {
  return (
    <SheduleContainer>
      <ContentShedule>
        <TableScheduleHeader />
        <TableSchedule />
      </ContentShedule>
    </SheduleContainer>
  );
}
