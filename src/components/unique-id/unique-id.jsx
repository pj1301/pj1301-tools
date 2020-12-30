import React, { useState } from 'react';
import { v1, v4 } from 'uuid';
import './unique-id.scss';

const UniqueID = () => {

    const [u1, setU1] = useState('');
    // const [u3, setU3] = useState('');
    const [u4, setU4] = useState('');
    // const [u5, setU5] = useState('');

    function generateIds() {
        setU1(v1());
        setU4(v4());
    }

    function copyContent(id) {
        const element = document.getElementById(id);
        element.select();
        document.execCommand('copy');
      }

    return(
        <div>
            <h3>UUID Generator</h3>
            <div className="btn-wrap">
                <button onClick={() => generateIds()}>Generate</button>
            </div>
            <div className="row-wrap">
                <label>V1</label>
                <input id="uuid1" value={u1} readOnly/>
                <button onClick={() => copyContent('uuid1')}>Copy</button>
            </div>
            <div className="row-wrap">
                <label>V4</label>
                <input id="uuid4" value={u4} readOnly/>
                <button onClick={() => copyContent('uuid4')}>Copy</button>
            </div>
        </div>
    )
}

export default UniqueID;