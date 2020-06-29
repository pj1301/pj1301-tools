import React, { useState } from 'react';
import './dater.scss';

const Dater = () => {

  const [value, setValue] = useState('');
  const [dateString, setDateString] = useState('');
  const [dateISOString, setDateISOString] = useState('');

  const calculateTodaysDate = () => {
    const date = new Date();
    setValue(date.toString());
    setDateString(date.toDateString());
    setDateISOString(date.toISOString());
  }

  const calculateRandomDate = () => {
    const start = new Date(2015, 0, 1);
    const end = new Date();
    const randomDate = new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
    setValue(randomDate.toString());
    setDateString(randomDate.toDateString());
    setDateISOString(randomDate.toISOString());
  }

  const copyContent = id => {
    const element = document.getElementById(id);
    element.select();
    document.execCommand('copy');
  }

  return (
    <div className="dater-card">
      <h3>Date Calculator</h3>
      <div className="btn-wrap">
        <button onClick={() => calculateTodaysDate()}>Get Today's Date</button>
        <button onClick={() => calculateRandomDate()}>Get Random Date</button>
      </div>
      <div className="row-wrap">
        <input id="date-1" value={value} readOnly/>
        <button onClick={() => copyContent('date-1')}>Copy</button>
      </div>
      <div className="row-wrap">
        <input id="date-2" value={dateString} readOnly/>
        <button onClick={() => copyContent('date-2')}>Copy</button>
      </div>
      <div className="row-wrap">
        <input id="date-3" value={dateISOString} readOnly/>
        <button onClick={() => copyContent('date-3')}>Copy</button>
      </div>
    </div>
  )
}

export default Dater;
