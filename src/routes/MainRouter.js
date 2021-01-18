// Imports básicos
import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

// Imports de páginas
import HomePage from '../pages/HomePage';
import DetailPage from '../pages/DetailPage';
import PageNotFound from '../pages/PageNotFound';

/**
 * Sistema de rotas e navegação
 */
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
        <Route path="**">
          <PageNotFound />
        </Route>
      </Switch>
    </BrowserRouter>
  )
}

