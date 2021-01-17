// Imports básicos
import React, { useState, useEffect } from 'react';

// Imports de estilo
import '../styles/Header';

// Imports de assets
import logo from '../assets/img/logo.png';

export default function Header({ nomeCandidato }) {
  const [nome, setNome] = useState(nomeCandidato);
  const [sigla, setSigla] = useState('CB');

  const setSigla = () => {
    let siglaTemp;
    if (!nomeCandidato) {
      setSigla('CB');
      return;
    }
    
  }

  useEffect(() => {
    let siglaTemp;
    if (nome) {

    }
  }, [])


  return (
    <div className='header-container'>
      <div>
        <img src={logo} alt="Logo" />
      </div>
      <div className='username-container'>
        <div className='username'>
          {nomeCandidato || 'Nome do Candidato'}
        </div>
        <div>

        </div>
      </div>

    </div>
  )
}
