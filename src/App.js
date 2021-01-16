// Imports básicos
import React from 'react';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';

// Imports de estilos
import './App.css';

// Imports de páginas
import HomePage from './pages/HomePage';
import DetailPage from './pages/DetailPage';

function App() {
  return (
    <div className="wrapper">
      <h1>Teste bagulhado</h1>
      <BrowserRouter>
        <nav>
          <ul>
            <li><Link to="/">Home Screen</Link></li>
            <li><Link to="/detail?id=1234">Detail Screen</Link></li>
          </ul>
        </nav>
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route exact path="/detail">
            <DetailPage />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;