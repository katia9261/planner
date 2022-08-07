import React from 'react';
import styles from './Header.module.css';
import Date from './Date/Date';
import Quotation from './Quotation/Quotation';
import CalendarHeader from '../Calendar/FolderComponents/CalendarHeader';
import styled from 'styled-components';

const HeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 30px 30px 0 30px;
  height: 40px;
  background-color: #edf0f7;
  border-radius: 15px 15px 0 0;
  align-items: center;

	@media (max-width: 768px) {
		margin: 0;
		margin-top: 20px;
	}

`;

const Header = ({ isCalendar, isSettings }) => {
  return (
    <HeaderContainer>
      {isCalendar ? (
        <CalendarHeader />
      ) : isSettings ? (
        <div style={{ width: '100%', textAlign: 'center' }}>Settings</div>
      ) : (
        <>
          <Date />
          <Quotation />
        </>
      )}
    </HeaderContainer>
  );
};

export default Header;
