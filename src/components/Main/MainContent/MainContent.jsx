import React from 'react';
import Header from './Header/Header.jsx';
import styles from './MainContent.module.css';
import TodaySchedule from './TodaySchedule/TodaySchedule.jsx';
import Calendar from './Calendar/Calendar.jsx';
import Settings from './Settings/Settings.jsx';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

export default function MainContent() {
  return (
    <div className={styles.mainContent}>
      <Routes>
        <Route
          path="/today"
          element={
            <>
              <Header isCalendar={false} />
              <TodaySchedule />
            </>
          }
        />
        <Route
          path="/month"
          element={
            <>
              <Header isCalendar />
              <Calendar />
            </>
          }
        />
				<Route
          path="/settings"
          element={
            <>
              <Header isCalendar={false} isSettings={true} />
              <Settings />
            </>
          }
        />
      </Routes>
    </div>
  );
}
