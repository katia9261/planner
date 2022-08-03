import { buildTimeValue } from '@testing-library/user-event/dist/utils';
import React from 'react';

const GlobalContext = React.createContext({
  monthIndex: 0,
  setMonthIndex: (index) => {}
})

export default GlobalContext;
