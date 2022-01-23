import React, { useState } from 'react';
import DatePicker from 'react-date-picker';
import { PickerContainer, DateControls } from './DateInfo.styles';

const DateInfo = (props) => {
  const [pickerDate, setPickerDate] = useState(new Date());
  const [current, setCurrent] = useState(false);
  const isToday = new Date();

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
    <PickerContainer>
      <DatePicker
        value={current ? isToday : pickerDate}
        onChange={handlePickerSelect}
      />

      <DateControls onClick={handleSubmit}>View</DateControls>
      <DateControls onClick={clearPicker}>Back to today</DateControls>
    </PickerContainer>
  );
};

export default DateInfo;
