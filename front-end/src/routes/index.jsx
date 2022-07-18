import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Login from '../pages/Login';
import Register from '../pages/Login/Register';

export default function Routes() {
  return (
    <Switch>
      <Route path="/login" component={ Login } />
      <Route path="/register" component={ Register } />
      <Route exact path="/">
        <Redirect to="/login" />
      </Route>
    </Switch>
  );
}
