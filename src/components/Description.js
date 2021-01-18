// Imports básicos
import React from 'react';

// Imports de estilo
import '../styles/Description.css';

export default function Description ({ id, nome, desc }) {

  return (
    <div className="description-container">
      <div className="description-nome-container">
        {nome}
      </div>
      <div className="description-id-container">
        {`ID: ${id}`}
      </div>
      <div className="description-texto">
        {desc}
      </div>
    </div>
  )
}