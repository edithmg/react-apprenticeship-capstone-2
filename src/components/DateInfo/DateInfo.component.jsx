import React, { useState } from 'react';
import styled from 'styled-components';
import DatePicker from 'react-date-picker';

const Button = styled.button`
  padding: 0.8em;
  margin: 0.6em;
  color: black;
  background: #ccc;
  font-size: 15px;
  font-family: 'Space Mono';
  border: none;
  border-radius: 3px;
  cursor: pointer;
`;

const DateInfo = (props) => {
  const [pickerDate, setPickerDate] = useState(new Date());
  const [current, setCurrent] = useState(false);
  const isToday = new Date();
  //console.log(isToday, current);

  const handlePickerSelect = (newDate) => {
    setPickerDate(newDate);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    //console.log(pickerDate);
    // month-day-year
    const year = pickerDate.getFullYear();
    const month = pickerDate.getMonth() + 1; // months are numbered 0-11 in JavaScript!
    const day = pickerDate.getDate();
    const newDate = `&date=${year}-${month}-${day}`;
    //console.log(newDate);
    props.setDate(newDate);
    props.setNasaData({});
  };

  const clearPicker = (e) => {
    e.preventDefault();
    const today = new Date();
    const yy = today.getFullYear();
    const mm = today.getMonth() + 1;
    const dd = today.getDate();
    const todayDate = `&date=${yy}-${mm}-${dd}`;
    //console.log(todayDate);
    props.setDate(todayDate);
    setCurrent(true);
    props.setNasaData({});
  };

  return (
    <div>
      <form>
        <DatePicker
          value={current ? isToday : pickerDate}
          onChange={handlePickerSelect}
        />

        <Button onClick={handleSubmit}>view</Button>
        <Button onClick={clearPicker}>Today</Button>
      </form>
    </div>
  );
};

export default DateInfo;
