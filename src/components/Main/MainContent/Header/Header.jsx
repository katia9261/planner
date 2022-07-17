import React from 'react'
import styles from './Header.module.css'
import Date from './Date/Date'
import Quotation from './Quotation/Quotation'

const Header = () => {
  return (
    <div className={styles.dateQuotation}>
      <Date/>
      <Quotation/>
    </div>
  )
}

export default Header;
