import React, { useState } from 'react';
import './gitignore.scss';
import download from 'downloadjs';
import { data } from '../../assets/gitignore-configs/gitignore-configs';

const Gitignore = () => {

  const [ projectType, setProjectType ] = useState('');
  const [ gitignoreContent, setGitignoreContent ] = useState('');

  const downloadConfig = (event) => {
    event.preventDefault();
    if (!projectType) return;
    const content = data[projectType];
    download(content, '.gitignore', 'text');
  }
  
  const copyConfig = (event) => {
    event.preventDefault();
    if (!projectType) return;
    const content = data[projectType];
    const {length} = content;
    const input = document.createElement('textarea');
    const card = document.querySelector('div.gitignore-card');
    card.append(input);
    input.innerHTML = `<pre>${content}</pre>`;
    input.focus();
    input.setSelectionRange(5, 5+length);
    document.execCommand('copy');
    input.remove();
  }

  return (
    <div className="gitignore-card">
      <h3>Gitignore Card</h3>
      <form>
        <p>Project Type:</p>
        <div className="checkbox-wrap">
          <label>React
            <input id="gi-react" className="checkbox" type="radio" value="react" onChange={() => setProjectType('react')} checked={projectType === 'react' ? true : false}/>
          </label>
          <label>Angular
            <input id="gi-angular" className="checkbox" type="radio" value="angular" onChange={() => setProjectType('angular')} checked={projectType === 'angular' ? true : false}/>
          </label>
          <label>Node
            <input id="gi-node" className="checkbox" type="radio" value="node" onChange={() => setProjectType('node')} checked={projectType === 'node' ? true : false}/>
          </label>
        </div>
        <div className="btn-wrap">
          <button onClick={(e) => downloadConfig(e)}>Download File</button>
          <button onClick={(e) => copyConfig(e)}>Copy Contents</button>
        </div>
      </form>
    </div>
  )
}

export default Gitignore;
