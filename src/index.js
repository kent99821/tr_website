import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { HashRouter,Switch, Route,  Redirect } from 'react-router-dom';
import Home from './views/Home';

ReactDOM.render(
    (
      <HashRouter>
        <Switch>
          <Route path="/turing" component={Home}></Route>
          <Redirect path="/" to="/turing"/>
        </Switch>
      </HashRouter>
    ),
  document.getElementById('root')
);


