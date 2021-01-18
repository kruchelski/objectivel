// Imports básicos
import React, { useState, useEffect } from 'react';

// Imports de componente
import CharCard from './CharCard';

// Imports de estilo
import '../styles/CharList.css';

export default function CharList({ personagens }) {

  const [mobileWidth, setMobileWidth] = useState(false);

  useEffect(() => {
    updateDimensions();
    window.addEventListener("resize", updateDimensions);
  })

  /**
   * Verifica o tamanho da janela após a mesma ser redimensionada
   */
  const updateDimensions = () => {
    let windowWidth = typeof window !== "undefined" ? window.innerWidth : 0;
    setMobileWidth(windowWidth <= 375);
  }

  // Inicializa a variável para os componentes de CharCard
  const charCards = []

  // Adiciona os componentes à variável de lista de CharCard
  personagens.forEach((dado, index) => {
    charCards.push(
      <CharCard
        key={index}
        id={dado.id}
        avatar={dado.avatar}
        nome={dado.nome}
        series={dado.series}
        eventos={dado.eventos}
      />)

  })

  return (
    <div className='charlist-main-wrapper'>
      <div className='charlist-head'>
        <div className='charlist-head-item'>
          Personagem
        </div>
        {
          !mobileWidth && <div className='charlist-head-item'>
            Séries
          </div>
        }
        {
          !mobileWidth && <div className='charlist-head-item'>
            Eventos
          </div>
        }
      </div>
      <div className='charlist-container'>
        {charCards}
      </div>
    </div>
  )
}