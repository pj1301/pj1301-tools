import React, { useState } from 'react';
import './password.scss';

const Password = () => {

  const [ types, setTypes ] = useState([]);
  const [ characters, setCharacters ] = useState('');
  const [ password, setPassword ] = useState('');

  const alphaLow = 'abcdefghijklmnopqrstuvwxyz'.split('');
  const alphaHigh = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
  const numerical = '1234567890'.split('');
  const special = '!@£$%&*_?#'.split('');

  const randomIndex = (length) => {
    const index = Math.floor(Math.random() * length);
    return index;
  }

  const generatePassword = (array, number) => {
    const code = [];
    const { length } = array;
    let i = 1;
    while (i <= number) {
      code.push(array[randomIndex(length)]);
      i++;
    }
    setPassword(code.join(''));
  }

  const addType = (type) => {
    console.log(type);
    if (!types.includes(type)) return setTypes([...types, type]);
    return setTypes(types.filter(item => item !== type));
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    const availableChars = alphaLow;
    if (types.includes('cases')) availableChars.push(...alphaHigh);
    if (types.includes('numbers')) availableChars.push(...numerical);
    if (types.includes('symbols')) availableChars.push(...special);
    generatePassword(availableChars, characters);
  }

  const copyContent = () => {
    const element = document.getElementById('pw-display');
    element.select();
    document.execCommand('copy');
  }

  return(
    <div className="password-card">
      <h3 className="card-head">Password Generator</h3>
      <p>Confirm inputs:</p>
      <form>
        <div className="option-wrap">
          <label>UP
            <input className="checkbox" type="checkbox" onChange={() => addType('cases')} checked={types.includes('cases')}/>
          </label>
          <label>123
            <input className="checkbox" type="checkbox" onChange={() => addType('numbers')} checked={types.includes('numbers')}/>
          </label>
          <label>$
            <input className="checkbox" type="checkbox" onChange={() => addType('symbols')} checked={types.includes('symbols')}/>
          </label>
        </div>
        <div className="length-wrap">
          <label className="char-length">Chars
            <input type="number" value={characters} onChange={(e) => setCharacters(e.target.value)} />
          </label>
          <button onClick={(e) => handleSubmit(e)}>Generate</button>
        </div>
      </form>
      <div className="display">
        <input id="pw-display" name="display-pw" value={password} readOnly/>
        <button onClick={() => copyContent()}>Copy</button>
      </div>
    </div>
  )
}

export default Password;
