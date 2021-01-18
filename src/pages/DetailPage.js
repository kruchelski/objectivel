// Imports básicos
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

// Imports componentes
import LoadingIndicator from '../components/LoadingIndicator';
import Footer from '../components/Footer';
import Description from '../components/Description';
import Links from '../components/Links';
import MediaContainer from '../components/MediaContainer';
import ErrorInfo from '../components/ErrorInfo';
import NoData from '../components/NoData';

// Imports estilos
import '../styles/DetailPage.css';

// Imports serviços
import * as ApiService from '../services/ApiService';


export default function DetailPage() {
  const [loading, setLoading] = useState(true);
  const [id, setId] = useState(null);
  const [dados, setDados] = useState(null);
  const [erro, setErro] = useState(null)

  const { search } = useLocation();

  useEffect(() => {
    const match = search.split('?id=');
    const query = match?.[1];

    if (query && query !== id) {
      setId(query);
    }

    /**
     * Busca detalhes do personagem escolhido
     */
    const fetchDados = async () => {
      if (!id) {
        return;
      }
      setLoading(true);
      try {
        const response = await ApiService.getDetalhesPersonagem(id);
        if (response) {
          setDados(response);
        }
      } catch (err) {
        setErro({ icone: 'error_outline', msg: `Erro ao buscar detalhes do personagem. Tente novamente mais tarde. Mensagem original: ${err.message || err.error}` })
      } finally {
        setLoading(false);
      }
    }
    if (erro) {
      return;
    }
    fetchDados()
  }, [id, erro])

  /**
   * Resetar o estado de erro e tentar uma nova requisição à API
   */
  const handleOnRetyCallback = () => {
    setErro(null);
  }

  return (
    <>
      <div className='detail-main-container'>
        <h1>Detalhes do personagem</h1>
        {
          loading && <LoadingIndicator />
        }
        {
          !loading && !erro && dados &&
          <>
            <div className='cover-desc-container'>
              <img src={dados.personagem.avatar} alt={dados.personagem.nome || 'Imagem do personagem'} className='cover-img' />
              <Description id={dados.personagem.id} nome={dados.personagem.nome} desc={dados.personagem.desc} />
            </div>
            <Links pagina={dados.personagem.pagina.url} wiki={dados.personagem.wiki.url} comicLink={dados.personagem.comiclink.url} />
            <MediaContainer dados={dados.series} titulo={'Series'} />
            <MediaContainer dados={dados.events} titulo={'Eventos'} />
            <MediaContainer dados={dados.comics} titulo={'Quadrinhos'} />

          </>
        }
        {
          !loading && !erro && !dados &&
          <NoData msg={'Ocorreu um problema ao carregar os detalhes do personagem.'} />
        }

        {
          !loading && erro &&
          <ErrorInfo msg={erro.msg} icon={erro.icone} retryCallback={handleOnRetyCallback} />
        }

      </div>
      {
        !loading && 
        <Footer
          paginaAtual={null}
          paginasTotais={null}
          onNavButtonClick={null}
          linkSimples={true}
          linkTo={'/'}
          linkLabel={'Ir para home'}
        />
      }
    </>
  )
}