import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import './index.scss';
import App from './App.jsx';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
<Router>
  <App />
</Router>, document.getElementById('root'));

serviceWorker.register();
