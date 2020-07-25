import React, { useState } from 'react';
import DatePicker from 'react-datepicker'
import logo from './logo.svg';
import './App.css';
import 'react-datepicker/dist/react-datepicker.css'

function App() {
  const [selectDate, setSelectDate] = useState(null)
  return (
    <div className="App">
      <DatePicker
        selected={selectDate}
        onChange={date => setSelectDate(date)}
        dateFormat='dd/MM/yy'
        // minDate={new Date()}
        //maxDate={new Date()}
        //filterDate={date=> date.getDay()==! 6 && date.getDay()==! 0}
        isClearable
        showYearDropdown
        scrollableYearDropdown
      />
    </div>
  );
}

export default App;
