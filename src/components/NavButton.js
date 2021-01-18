// Imports básicos
import React from 'react';

// Imports de estilos
import '../styles/NavButton.css';

export default function NavButton ({ pagina, selecionado, handleNavButtonClick }) {

  /**
   * Evento de clicar no botão
   */
  const onNavButtonClick = () => {
    handleNavButtonClick(pagina);
  }

  return (
    <div 
      className={`nav-button-container ${selecionado ? 'nav-button-selecionado' : ''}`}
      onClick={() => onNavButtonClick()}
    >
      <span className="nav-button-numero"> {pagina}</span>
    </div>
  )
}