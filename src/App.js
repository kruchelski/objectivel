// Imports básicos
import React from 'react';

// Imports componentes
import Header from './components/Header';

// Imports de estilos
import './App.css';

// Imports de rotas
import MainRouter from './routes/MainRouter';

function App() {
  return (
    <div className='main-app-container'>
      <Header nomeCandidato={'Cassiano Kruchelski'} />
      <MainRouter />
    </div>
  );
}

export default App;