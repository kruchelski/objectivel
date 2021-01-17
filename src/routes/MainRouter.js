// Imports básicos
import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

// Imports de páginas
import HomePage from '../pages/HomePage';
import DetailPage from '../pages/DetailPage';

export default function MainRouter() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route exact path="/detail">
          <DetailPage />
        </Route>
      </Switch>
    </BrowserRouter>
  )
}

