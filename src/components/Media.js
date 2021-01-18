// Imports básicos
import React from 'react';

// Impoets de estilos
import '../styles/Media.css';

export default function Media ({ nome, imagem }) {
  
  return (
    <div className='media-card'>
      <img src={imagem} alt={nome || 'Imagem da media'} className='media-img' />
      <div className='media-titulo text-limiter'>
        {nome}
      </div>
    </div>
  )
}