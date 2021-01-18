// Imports básicos
import React from 'react';

// Imports de estilo
import '../styles/Links.css';

export default function Links({ pagina, wiki, comicLink }) {

  return (
    <div className='links-container'>
      <div className='link-item'>
        {
          pagina ?
            <a className='link-item-container' href={pagina} target={'_BLANK'} rel="noreferrer"> 
              <div>
              <span className="material-icons link-icon">
                account_circle
                </span></div><div>Página</div></a> :
            <p><span className="material-icons link-icon">
              account_circle
          Sem página </span></p>
        }
      </div>
      <div className='link-item'>
        {
          wiki ?
            <a className='link-item-container' href={wiki} target={'_BLANK'} rel="noreferrer">
              <span className="material-icons link-icon">
                book
              </span>Wiki</a> :
            <p><span className="material-icons link-icon">
              book
          </span>Sem página</p>
        }
      </div>
      <div className='link-item'>
        {
          comicLink ?
            <a className='link-item-container' href={wiki} target={'_BLANK'} rel="noreferrer">
              <span className="material-icons link-icon">
                menu_book
              </span>Quadrinhos</a> :
            <p><span className="material-icons link-icon">
              menu_book
          </span>Sem página</p>
        }
      </div>
    </div>
  )
}