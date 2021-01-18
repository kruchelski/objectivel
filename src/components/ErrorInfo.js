// Imports básicos
import React from 'react';

// Imports de estilos
import '../styles/ErrorInfo.css';

export default function ErrorInfo({ icon, msg, retryCallback }) {

  /**
   * Função para tentar novamente buscar os dados
   */
  const onRetryClick = () => {
    retryCallback();
  }

  return (
    <>
    <div className='error-container'>
      <div className='error-icon'>
        <span className='material-icons'>
          {icon || 'error_outline'}
        </span>
      </div>
      <div className='error-msg'>
        {msg || 'Ocorreu um erro inesperado ao processar requisição. Tente novamente mais tarde'}
      </div>

    </div>
    <div className="error-button-container" onClick={()=> onRetryClick()}>
      Tentar novamente
    </div>
    </>
  )
}