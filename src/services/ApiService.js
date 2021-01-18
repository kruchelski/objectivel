// Imports básicos
import api from '../config/AxiosConfig';
import { calcularHashTimestamp } from '../helpers/HashHelper';

export const getListaPersonagens = async (query = null, pagina = null) => {
  let name = query ? query.trim() : '';
  let offset = pagina ? (pagina - 1) * 10 : 0;

  const info = calcularHashTimestamp();


  if (!info || !info.hash || !info.ts) {
    throw new Error('Não foi possível calcular Hash ou TimeStamp');
  }
  let params = {
    ts : info.ts,
    hash : info.hash,
    limit : 10
  }
  if (name) {
    params.name = name;
  }
  if (offset) {
    params.offset = offset;
  }

  const response = await api.get('characters', {
    params
  })

  const personagens = _handleTodosPersonagens(response);
  return personagens;

}

export const getDetalhesPersonagem = async (id) => {
  const info = calcularHashTimestamp();
  try {
    if (!info || !info.hash || !info.ts) {
      throw new Error('Não foi possível calcular Hash ou TimeStamp');
    }
    let params = {
      ts : info.ts,
      hash : info.hash,
    }

    let promises = [];

    promises.push(api.get(`characters/${id}`, {
      params
    }));
    promises.push(api.get(`characters/${id}/comics`, {
      params
    }));
    promises.push(api.get(`characters/${id}/events`, {
      params
    }))
    promises.push(api.get(`characters/${id}/series`, {
      params
    }))

    return Promise.all(promises).then(response => {
      const [personagemResponse, comicsResponse, eventsResponse, seriesResponse] = response;
      const dadosNormalizados = {
        personagem: _handlePersonagem(personagemResponse),
        comics: _handleComics(comicsResponse),
        events: _handleEvents(eventsResponse),
        series: _handleSeries(seriesResponse),
      }
      return dadosNormalizados;
    })

  } catch (err) {
    console.log('Ocorreu um erro ao buscar os dados específicos de personagem')
  }
}

const _handleTodosPersonagens = (dados) => {
  let normPersonagens;
  const { count, offset, total, results } = dados.data.data;
  const personagens = results.map((res) => {
    let series = [];
    let eventos = [];
    res.series?.items.forEach((serie, index) => {
      if (index <= 2) {
        series.push(serie.name);
      }
    })

    res.events?.items.forEach((evento, index) => {
      if (index <= 2) {
        eventos.push(evento.name);
      }
    })

    if (!series.length) {
      series.push('N/A');
    }
    if (!eventos.length) {
      eventos.push('N/A');
    }

    let avatar = res?.thumbnail?.path;
    if (avatar) {
      avatar += `/standard_medium.${res.thumbnail.extension}`;
    }

    return ({
      id: res.id,
      nome: res.name,
      series,
      eventos,
      avatar
    })
  })

  normPersonagens = {
    count,
    offset,
    total,
    personagens
  }

  return normPersonagens;
}

const _handlePersonagem = (personagem) => {
  let normPersonagem;
  console.log('Handle personagem');
  console.log(personagem);
  return normPersonagem;
}

const _handleSeries = (series) => {
  let normSeries;
  console.log('Handle series');
  console.log(series);
  return normSeries;
}

const _handleEvents = (events) => {
  let normEvents;
  console.log('Handle events');
  console.log(events);
  return normEvents;
}

const _handleComics = (comics) => {
  let normComics;
  console.log('Handle comics');
  console.log(comics);
  return normComics;
}
