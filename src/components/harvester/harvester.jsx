import React, { useState } from 'react';
import './harvester.scss';
import download from 'downloadjs';

const Harvester = () => {

  const [ fileSelect, setFileSelect ] = useState('');
  const [ projectType, setProjectType ] = useState('');

  const angularScripts = {
    "ng": "ng",
    "start": "ng serve",
    "build": "ng build",
    "test": "ng test",
    "lint": "ng lint",
    "e2e": "ng e2e"
  }

  const reactScripts = {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject"
  }

  const formatData = (data) => {
    const newObj = {    
      "name": data.name,
      "version": data.version,
      "description": projectType === 'react' ? "React Application (with PNPM)" : "Angular Application (with PNPM)",
      "author": "pj1301",
      "scripts": projectType === 'react' ? reactScripts : angularScripts,
      "private": true,
      "dependencies": {}
    };
    const vals = Object.keys(data.dependencies);
    for(let i = 0; i < vals.length; i++) {
      newObj["dependencies"][vals[i]] = data.dependencies[vals[i]]['version'];
    };
    return newObj;
  }

  const handleConversion = async (event) => {
    event.preventDefault();
    const data = JSON.parse(await fileSelect.text());
    const information = formatData(data);
    download(JSON.stringify(information, null, 2), 'pnpm-package.json', 'application/json');
  }

  return(
    <div className="harvester-card">
      <h3>Harvester Card</h3>
      <form>
        <label>Select file:
          <input type="file" name="file-select" onChange={(e) => setFileSelect(e.target.files[0])}/>
        </label>
        <p>Project Type:</p>
        <div className="checkbox-wrap">
          <label>React
            <input id="har-react" className="checkbox" type="radio" value="react" onChange={() => setProjectType('react')} checked={projectType === 'react' ? true : false}/>
          </label>
          <label>Angular
            <input id="har-angular" className="checkbox" type="radio" value="angular" onChange={() => setProjectType('angular')} checked={projectType === 'angular' ? true : false}/>
          </label>
        </div>
        <button onClick={(e) => handleConversion(e)}>Convert</button>
      </form>
    </div>
  )
}

export default Harvester;