import React from 'react';
import './home.scss';
import Harvester from '../harvester/harvester.jsx';

const Home = () => {

  return(
    <div className="page-wrap">
      <div className="card">
        <Harvester />
      </div>
    </div>
  )
}

export default Home;