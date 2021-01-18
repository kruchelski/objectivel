// Imports básicos
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

// Imports de estilo
import '../styles/CharCard.css';

export default function CharCard({ id, avatar, nome, series, eventos }) {

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

  return (
    <>
      <Link to={`/detail?id=${id}`} >
        <div className='char-card-container'>

          {/* Avatar + Nome do personagem */}
          <div className='personagem-wrapper'>
            <img src={avatar} alt={nome || 'Avatar do personagem'} className='avatar-img' />
            <p className='personagem-nome'>{nome}</p>
          </div>

          {/* Series */}
          {
            !mobileWidth && <div className='series-wrapper'>
              {
                series.map((serie, index) => {
                  return <p key={index}>{serie}</p>
                })
              }
            </div>
          }

          {/* Eventos */}
          {
            !mobileWidth && <div className='eventos-wrapper'>
              {
                eventos.map((evento, index) => {
                  return <p key={index}>{evento}</p>
                })
              }
            </div>
          }
        </div>
      </Link>
    </>
  )
}