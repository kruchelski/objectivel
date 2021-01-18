// Imports básicos
import React from 'react';
import { Link } from 'react-router-dom';

// Imports de componentes
import NavContainer from './NavContainer';

// Imports de estilos
import '../styles/Footer.css'

export default function Footer({ paginaAtual, paginasTotais, onNavButtonClick, linkSimples, linkTo, linkLabel }) {
  return (
    <div className='footer-main-container'>
      {
        !linkSimples && <NavContainer paginaAtual={paginaAtual} paginasTotais={paginasTotais} onNavButtonClick={onNavButtonClick} />
      }
      {
        linkSimples && <Link to={linkTo} className='footer-link'>{linkLabel}</Link>
      }
    </div>
  )
}