// Imports básicos
import React, { useState, useEffect } from 'react';

// Imports de estilo
import '../styles/CharList.css';

// Imports de componente
import CharCard from './CharCard';

// Imports temp
import avatar from '../assets/img/avatar.png';

export default function CharList({ onCardClickCallback, personagens }) {

  const [mobileWidth, setMobileWidth] = useState(false);

  useEffect(() => {
    updateDimensions();
    window.addEventListener("resize", updateDimensions);
  })

  const updateDimensions = () => {
    let windowWidth = typeof window !== "undefined" ? window.innerWidth : 0;
    setMobileWidth(windowWidth <= 375);
  }

  const handleOnClick = (char) => {
    onCardClickCallback(char)
  }

  const charCards = []

  personagens.forEach((dado, index) => {
    charCards.push(
      <CharCard
        key={index}
        id={dado.id}
        avatar={dado.avatar}
        nome={dado.nome}
        series={dado.series}
        eventos={dado.eventos}
        onClickCallback={handleOnClick}
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