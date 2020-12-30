import React, { useState } from 'react';
import { ObjectId } from 'mongodb';
import './mongoId.scss';

const MongoID = () => {
    const [id, setID] = useState('');

    function generateId() {
        setID(ObjectId());
    }

    function copyContent(id) {
        const element = document.getElementById(id);
        element.select();
        document.execCommand('copy');
    }

    return(
        <div>
            <h3>Mongo DB ID Generator</h3>
            <div className="btn-wrap">
                <button onClick={() => generateId()}>Generate New ID</button>
            </div>
            <div className="row-wrap">
                <input id="idVal" value={id} readOnly/>
                <button onClick={() => copyContent('idVal')}>Copy</button>
            </div>
        </div>
    )
}

export default MongoID;
