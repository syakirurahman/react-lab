import React from 'react';
import 'assets/scss/bootstrap/bootstrap-grid.scss';
import 'assets/scss/default.scss';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Home from 'pages/Home';
import Datepickers from 'pages/Datepickers';
import InfiniteScroll from 'pages/InfiniteScroll';
import ReactTabs from 'pages/ReactTabs';
import Charts from 'pages/Charts';

function App() {
  return (
    <div className="react-lab-app">
      <Router>
        <Route exact component={Home} path="/"/>
        <Route component={ReactTabs} path="/react-tabs"/>
        <Route component={InfiniteScroll} path="/infinite-scroll"/>
        <Route component={Datepickers} path="/datepickers"/>
        <Route component={Charts} path="/charts"/>
      </Router>
    </div>
  );
}

export default App;
