// Imports básicos
import React, { useState, useEffect } from 'react';

// Imports de componentes
import Input from '../components/Input';
import CharList from '../components/CharList';
import Footer from '../components/Footer';
import LoadingIndicator from '../components/LoadingIndicator';
import ErrorInfo from '../components/ErrorInfo';
import NoData from '../components/NoData';

// Imports de estilo
import '../styles/HomePage.css';

// Imports de services
import * as ApiService from '../services/ApiService';


export default function HomePage() {

  const [loading, setLoading] = useState(true);
  const [query, setQuery] = useState('');
  const [pagina, setPagina] = useState(1);
  const [totalPaginas, setTotalPaginas] = useState(1);
  const [personagens, setPersonagens] = useState([]);
  const [erro, setErro] = useState(null)

  useEffect(() => {

    /**
     * Busca os dados dos personagens para serem listados na tela principal
     */
    const fetchDados = async () => {
      setLoading(true);
      try {
        const response = await ApiService.getListaPersonagens(query, pagina);
        setTotalPaginas(Math.ceil(response.total / 10));
        setPersonagens(response.personagens);
      } catch (err) {
        setErro({ icone: 'error_outline', msg: `Erro ao buscar dados. Tente novamente mais tarde. Mensagem original: ${err.message || err.error}` })
      } finally {
        setLoading(false);
      }
    }

    fetchDados();
  }, [query, pagina, erro])

  /**
   * Atualiza a query de busca e realiza uma nova requisição com um termo de busca
   * @param {*} queryInput Termo que será buscado
   */
  const handleOnSubmit = (queryInput) => {
    setPagina(1);
    setQuery(queryInput);
  }

  /**
   * Atualiza a página selecionada e realiza uma nova requisição para buscar novos dados
   * @param {*} paginaInput Página que será buscada
   */
  const handleOnClickNavButton = (paginaInput) => {
    setPagina(paginaInput)
  }

  /**
   * Reseta o estado de erro e tenta uma nova requisição à API
   */
  const handleOnRetyCallback = () => {
    setErro(null);
  }

  return (
    <>
      <div className='home-main-container'>
        <h1>Busca de personagens</h1>
        {
          loading && <LoadingIndicator />
        }
        {
          !loading && !erro && <Input
            inputLabel={'Nome do personagem'}
            inputPlaceholder={'Search'}
            inputValue={query}
            onSubmitInput={handleOnSubmit}
          />
        }
        {
          !loading && !erro && personagens.length > 0 &&
          <CharList
            personagens={personagens}
          />
        }

        {
          !loading && !erro && !personagens.length &&
          <NoData msg={'Não foram encontrados personagens com o termo buscado.'} />
        }

        {
          !loading && erro &&
          <ErrorInfo msg={erro.msg} icon={erro.icone} retryCallback={handleOnRetyCallback} />
        }
      </div>
      {
        !loading && !erro &&
        <Footer
          paginaAtual={pagina}
          paginasTotais={totalPaginas}
          onNavButtonClick={handleOnClickNavButton}
          linkSimples={false}
        />
      }
    </>
  )
}