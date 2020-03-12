import React, { useState } from 'react';
import './gitignore.scss';
// import download from 'downloadjs';
// import * as reactGitignore from '../../assets/gitignore-configs/react/.gitignore';
// import * as angularGitignore from '../../assets/gitignore-configs/angular/.gitignore';
// import * as nodeGitignore from '../../assets/gitignore-configs/node/.gitignore';

const Gitignore = () => {

  const [ projectType, setProjectType ] = useState('');

  const chooseConfig = (event) => {
    event.preventDefault();
    // switch(projectType) {
    //   case 'react':
    //     download(reactGitignore, '.gitignore', 'text');
    //     break;
    //   case 'angular':
    //     download(reactGitignore, '.gitignore', 'text');
    //     break;
    //   case 'node':
    //     download(reactGitignore, '.gitignore', 'text');
    //     break;
    //   default:
    //     return;
    // }
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
        <button onClick={(e) => chooseConfig(e)}>Download File</button>
      </form>
    </div>
  )
}

export default Gitignore;