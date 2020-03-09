import React from 'react';
import './home.scss';
import Harvester from '../harvester/harvester.jsx';
import Gitignore from '../gitignore/gitignore.jsx';

const Home = () => {

  return(
    <div className="page-wrap">
      <div className="card">
        <Harvester />
      </div>
      <div className="card">
        <Gitignore />
      </div>
    </div>
  )
}

export default Home;