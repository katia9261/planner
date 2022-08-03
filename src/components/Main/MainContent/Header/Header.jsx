import React from 'react';
import styles from './Header.module.css';
import Date from './Date/Date';
import Quotation from './Quotation/Quotation';
import CalendarHeader from '../Calendar/FolderComponents/CalendarHeader';

const Header = ({isCalendar}) => {
  return (
    <div className={styles.dateQuotation}>
      {isCalendar ?
        <CalendarHeader /> :
        <>
          <Date />
          <Quotation />
        </>
      }
    </div>
  );
};

export default Header;
