// Imports básicos
import React, { useEffect, useState } from 'react'

// Imports de componentes
import NavButton from './NavButton';

// Imports de estilos
import '../styles/NavContainer.css';

export default function NavBar({ paginaAtual, paginasTotais, onNavButtonClick }) {

  const [paginaInicial, setPaginaInicial] = useState(1);
  const [paginaFinal, setPaginaFinal] = useState(1);
  const [paginas, setPaginas] = useState([])
  const [mobileWidth, setMobileWidth] = useState(false);

  useEffect(() => {
    updateDimensions();
    window.addEventListener("resize", updateDimensions);
    montarNavBar();
  }, [paginaInicial, paginaFinal, mobileWidth])

  /**
   * Verifica o tamanho da janela após a mesma ser redimensionada
   */
  const updateDimensions = () => {
    let windowWidth = typeof window !== "undefined" ? window.innerWidth : 0;
    setMobileWidth(windowWidth <= 375);
  }

  /**
   * Monta o controle de navegação no Footer
   */
  const montarNavBar = () => {
    let primeiraPagina;
    let ultimaPagina; 

    switch (mobileWidth) {
      case false:
        // Se a página atual for a primeira ou a segunda
        if (paginaAtual === 1 || paginaAtual === 2) {
          primeiraPagina = 1;
          if (paginasTotais > 4) {
            ultimaPagina = 5;
          } else {
            ultimaPagina = paginasTotais;
          }
        }
        else
          // Se a página atual for a penúltima ou a última
          if (paginaAtual === paginasTotais || paginaAtual === (paginasTotais - 1)) {
            ultimaPagina = paginasTotais;
            if (paginasTotais - 4 > 0) {
              primeiraPagina = paginasTotais - 4;
            } else {
              primeiraPagina = 1;
            }
          } else
          // Se a página atual estiver no intervalo do meio
          {
            if (paginaAtual - 2 > 0) {
              primeiraPagina = paginaAtual - 2;
            } else {
              primeiraPagina = 1;
            }
            if (paginaAtual + 2 <= paginasTotais) {
              ultimaPagina = paginaAtual + 2;
            } else {
              ultimaPagina = paginasTotais;
            }
          }
        break;

      case true:
        // Se a página atual for a primeira
        if (paginaAtual === 1) {
          primeiraPagina = 1;
          if (paginasTotais > 2) {
            ultimaPagina = 3;
          } else {
            ultimaPagina = paginasTotais;
          }
        }
        else
          // Se a página atual for a última
          if (paginaAtual === paginasTotais) {
            ultimaPagina = paginasTotais;
            if (paginasTotais - 2 > 0) {
              primeiraPagina = paginasTotais - 2;
            } else {
              primeiraPagina = 1;
            }
          } else
          // Se a página atual estiver no intervalo do meio
          {
            if (paginaAtual - 1 > 0) {
              primeiraPagina = paginaAtual - 1;
            } else {
              primeiraPagina = 1;
            }
            if (paginaAtual + 1 <= paginasTotais) {
              ultimaPagina = paginaAtual + 1;
            } else {
              ultimaPagina = paginasTotais;
            }
          }
        break;
        default:
    }

    setPaginaInicial(primeiraPagina);
    setPaginaFinal(ultimaPagina);
    let paginasTemp = [];
    for (let i = paginaInicial; i <= paginaFinal; i++) {
      paginasTemp.push(i);
    }
    setPaginas(paginasTemp);
  }

  /**
   * Listener para quando clicar em um botão de navegação
   * @param {*} pagina Número da página de resultados que irá carregar
   */
  const handleNavClick = (pagina) => {
    onNavButtonClick(pagina);
  }

  return (
    <div className="nav-main-container">
      {
        paginaAtual - 2 >= 1 && <div
          className='nav-button-extremos'
          onClick={() => { handleNavClick(1) }}
        >
          <span className="material-icons">
            chevron_left
          </span>
          <span className="material-icons" style={{ marginLeft: '-20px' }}>
            chevron_left
          </span>
        </div>
      }

      {
        paginaAtual - 1 >= 1 && <div
          className='nav-button-icone'
          onClick={() => { handleNavClick(paginaAtual - 1) }}
        >
          <span className="material-icons">
            chevron_left
          </span>
        </div>
      }

      {
        paginas.map((pagina, index) => {
          return (
            <NavButton key={index} pagina={pagina} selecionado={pagina === paginaAtual} handleNavButtonClick={handleNavClick} />
          )
        })
      }

      {
        paginaAtual + 1 <= paginasTotais && <div
          className='nav-button-icone'
          onClick={() => { handleNavClick(paginaAtual + 1) }}
        >
          <span className="material-icons">
            chevron_right
          </span>
        </div>
      }

      {
        paginaAtual + 2 <= paginasTotais && <div
          className='nav-button-extremos'
          onClick={() => { handleNavClick(paginasTotais) }}
        >
          <span className="material-icons" style={{ marginRight: '-20px' }}>
            chevron_right
        </span>
          <span className="material-icons">
            chevron_right
        </span>
        </div>
      }
    </div>
  )
}
