// Imports Basicos
import React from 'react';

// Imports de componentes
import Footer from '../components/Footer';

// Imports de assets
import notFound from '../assets/img/notFound.png';

// Imports de estilos
import '../styles/PageNotFound.css';

export default function PageNotFound() {

  return (
    <>
      <div className='error-main-container'>
        <h1>Erro! Página não encontrada</h1>
        <div className='cover-desc-container'>
          <img src={notFound} alt={'Erro 404 - Página não encontrada'} className='error-img' />
        </div>
      </div>
      <Footer
        paginaAtual={null}
        paginasTotais={null}
        onNavButtonClick={null}
        linkSimples={true}
        linkTo={'/'}
        linkLabel={'Ir para home'}
      />

    </>
  )
}