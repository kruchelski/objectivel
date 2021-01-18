// Imports básicos
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

// Imports de componentes
import Input from '../components/Input';
import CharList from '../components/CharList';
import Footer from '../components/Footer';
import LoadingIndicator from '../components/LoadingIndicator';

// Imports de estilo
import '../styles/HomePage.css';

// Imports de services
import * as ApiService from '../services/ApiService';



export default function HomePage() {

  const [loading, setLoading] = useState(true);
  const [query, setQuery] = useState(null);
  const [pagina, setPagina] = useState(1);
  const [totalPaginas, setTotalPaginas] = useState(1);
  const [totalResultados, setTotalResultados] = useState(1);
  const [personagens, setPersonagens] = useState([]);

  useEffect(() => {
    const fetchDados = async () => {
      setLoading(true);
      try {
        const response = await ApiService.getListaPersonagens(query, pagina);
        setTotalPaginas(Math.ceil(response.total / 10));
        setTotalResultados(response.total);
        setPersonagens(response.personagens);
      } catch (err) {
        console.log('Ocorreu um erro [HomePage]');
        console.log(err)
      } finally {
        setLoading(false);
      }
    }

    fetchDados();
  }, [query, pagina] )

  const handleOnSubmit = (query) => {
    
    if (!query) {
      console.log('Nenhum texto digitado');
      return;
    }
    console.log('Foi digitado algo!!');
    console.log(query);
  }

  const handleOnCardClick = (item) => {
    console.log('Home compoenente recebendo click');
    console.log(item);

  }

  return (
    <>
      <div className='home-main-container'>
        <h1>Busca de personagens</h1>
        {
          loading && <LoadingIndicator />
        }
        {
          !loading && <Input
            inputLabel={'Nome do personagem'}
            inputPlaceholder={'Search'}
            onSubmitInput={handleOnSubmit}
            />
        }
        {
          !loading && 
          <CharList 
            onCardClickCallback={handleOnCardClick} 
            personagens={personagens}
          />
        }
      </div>
      {
       !loading && <Footer />
      }
    </>
  )
}