import React, { useState } from 'react';
import './dater.scss';

const Dater = () => {

  const [value, setValue] = useState('');
  const [dateString, setDateString] = useState('');
  const [dateISOString, setDateISOString] = useState('');

  const calculateDate = () => {
    const date = new Date();
    setValue(date.toString());
    setDateString(date.toDateString());
    setDateISOString(date.toISOString());
  }

  const copyContent = (id) => {
    const element = document.getElementById(id);
    element.select();
    document.execCommand('copy');
  }

  return (
    <div className="dater-card">
      <h3>Date Calculator</h3>
      <div className="btn-wrap">
        <button onClick={() => calculateDate()}>Get Date/Time Now!</button>
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
