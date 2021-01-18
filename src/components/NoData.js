// Imports básicos
import React from 'react';

// Imports de estilos
import '../styles/NoData.css';

export default function NoData({msg}) {
  return(
    <div className='nodata-container'>
      <div className='nodata-msg'>
        {msg || 'Não foram encontrados dados para serem exibidos'}
      </div>
    </div>
  )
}