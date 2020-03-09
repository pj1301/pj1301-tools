import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './components/home/home';
// import Harvester from './components/harvester/harvester';
// import Gitignore from './components/gitignore';

import './App.scss';

const App = () => {
  
  return (
    <div className="App">
      <div className="navbar">
        <h1>pj1301 Toolset</h1>
      </div>
      <Switch>
        <Route exact path="/"><Home/></Route>
        {/* <Route path="/harvester"><Harvester/></Route> */}
      </Switch>
    </div>
  );
}

export default App;
