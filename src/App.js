import React from 'react';
import 'assets/scss/bootstrap/bootstrap-grid.scss';
import 'assets/scss/default.scss';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Home from 'pages/Home';
import Datepickers from 'pages/Datepickers';


function App() {
  return (
    <div className="react-lab-app">
      <Router>
        <Route exact component={Home} path="/"/>
        <Route component={Datepickers} path="/datepickers"/>
      </Router>
    </div>
  );
}

export default App;
