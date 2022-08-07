import React from 'react';
import styles from './Header.module.css';
import Date from './Date/Date';
import Quotation from './Quotation/Quotation';
import CalendarHeader from '../Calendar/FolderComponents/CalendarHeader';

const Header = ({ isCalendar, isSettings }) => {
  return (
    <div className={styles.dateQuotation}>
      {isCalendar ? (
        <CalendarHeader />
      ) : (isSettings ? (
        <div style={{ width: '100%', textAlign: 'center' }}>Settings</div>
      ) : (
        <>
          <Date />
          <Quotation />
        </>
      ))}
    </div>
  );
};

export default Header;
