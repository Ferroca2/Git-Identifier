import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import HomePage from './Pages/Home/homePage';
import Repositories from "./Pages/Repositories/repositories";

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route 
        exact
        path='/'
        component={HomePage}
        />
        <Route 
        exact 
        path="/repositories" 
        component={Repositories} 
        />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
