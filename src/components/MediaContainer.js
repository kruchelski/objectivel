// Imports básicos
import React from 'react';

// Imports de componentes;
import Media from '../components/Media';

// Imports de estilos
import '../styles/MediaContainer.css'

export default function MediaContainer({ dados, titulo }) {
  return (
    <div className='media-main-container'>
      <div className='media-container-titulo'>
        {titulo}
      </div>
      <div className='media-container-lista'>
        {
          dados.map((dado, index) => {
            return <Media key={index} nome={dado.nome} imagem={dado.imagem} />
          })
        }
      </div>
    </div>
  )
}