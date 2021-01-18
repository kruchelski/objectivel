// Imports básicos
import React, { useState, useEffect } from 'react';

// Imports de estilo
import '../styles/Header.css';

// Imports de assets
import logo from '../assets/img/logo.png';

export default function Header({ nomeCandidato }) {
  const [sigla, setSigla] = useState('CB');

  /**
   * Monta a sigla para ficar no avatar
   */
  const getSigla = () => {
    let siglaTemp = ''
    if (!nomeCandidato) {
      setSigla('CB');
      return;
    }
    const nomeSplited = nomeCandidato.split(' ');
    for (let i = 0; i < nomeSplited.length; i++) {
      if (i > 1) {
        break;
      }
      siglaTemp += nomeSplited?.[i]?.[0];
    }

    setSigla(siglaTemp);
  }

  useEffect(() => {
    getSigla();
  })

  return (
    <div className='header-container'>

      {/* Logo */}
      <img src={logo} alt="Logo" className='logo-img' />
      
      {/* Textos e avatar */}
      <div className='username-container'>
        
        {/* Textos */}
        <div className='username-text-container'>
          <div>
            <span className='username'>
              {nomeCandidato || 'Nome do Candidato'}
            </span>
          </div>
          <div>
            <span>
              Teste de Front-end
            </span>
          </div>
        </div>

        {/* Avatar */}
        <div className='sigla-container'>
          <span className='sigla'>{sigla}</span>
        </div>
      </div>
    </div>
  )
}
