import React from 'react';
import './home.scss';
import Harvester from '../harvester/harvester.jsx';
import Gitignore from '../gitignore/gitignore.jsx';
import Password from '../password/password.jsx';
import Dater from '../dater/dater.jsx';
import PDFUnlocker from "../pdfUnlocker/pdfUnlocker";

const Home = () => {

  return(
    <div className="page-wrap">
      <div className="card">
        <Harvester />
      </div>
      <div className="card">
        <Gitignore />
      </div>
      <div className="card">
        <Password />
      </div>
      <div className="card">
        <Dater />
      </div>
      <div className="card">
        <PDFUnlocker />
      </div>
    </div>
  )
}

export default Home;
