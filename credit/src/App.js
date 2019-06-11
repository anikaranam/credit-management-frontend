import React from 'react';
import logo from './logo.svg';
import './App.css';
import MainPage from './pages/MainPage';
import NotFoundPage from './pages/NotFoundPage';
import Users from './pages/Users';
import InfoPage from './pages/InfoPage';
import RecipientPage from './pages/RecipientPage';
import ConfirmationPage from './pages/ConfirmationPage';

import { BrowserRouter as Router, Route, Switch, Link, Redirect } from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
      <Route exact path='/' component={MainPage} />
      <Route exact path='/404' component={NotFoundPage} />
      <Route exact path='/users' component={Users} />
      <Route exact path='/info' component={InfoPage} />
      <Route exact path='/recipient' component={RecipientPage} />
      <Route exact path='/confirm' component={ConfirmationPage} />
      <Redirect to='/404' />
      </Switch>
    </Router>
  );
}

export default App;
