// Imports básicos
import api from '../config/AxiosConfig';
import { calcularHashTimestamp } from '../helpers/HashHelper';

/**
 * Realiza a busca por uma lista de personagens
 * @param {*} query Termo de busca
 * @param {*} pagina Página que está sendo requerida
 */
export const getListaPersonagens = async (query = null, pagina = null) => {
  let name = query ? query.trim() : '';
  let offset = pagina ? (pagina - 1) * 10 : 0;

  // Calcula o hash para fazer a requisição
  const info = calcularHashTimestamp();


  if (!info || !info.hash || !info.ts) {
    throw new Error('Não foi possível calcular Hash ou TimeStamp');
  }
  let params = {
    ts: info.ts,
    hash: info.hash,
    limit: 10
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

/**
 * Busca os detalhes de um personagem específico
 * @param {*} id ID do personagem que está sendo buscado
 */
export const getDetalhesPersonagem = async (id) => {
  const info = calcularHashTimestamp();
  if (!info || !info.hash || !info.ts) {
    throw new Error('Não foi possível calcular Hash ou TimeStamp');
  }
  let params = {
    ts: info.ts,
    hash: info.hash,
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
      comics: _handleMedia(comicsResponse),
      events: _handleMedia(eventsResponse),
      series: _handleMedia(seriesResponse),
    }
    return dadosNormalizados;
  })

}

/**
 * Handler para os dados da resposta da requisição de solicitação da lista de personagens
 * @param {*} dados Dados da resposta
 */
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

/**
 * Handler para os detalhes sobre um personagem
 * @param {*} dados 
 */
const _handlePersonagem = (dados) => {
  let normPersonagem;

  const { id, name, description, thumbnail, urls } = dados.data.data.results[0];
  normPersonagem = {
    id,
    nome: name,
    desc: description || '(Descrição não informada)',
    avatar: `${thumbnail.path}/portrait_uncanny.${thumbnail.extension}`,
    pagina: urls.length >= 1 ? urls[0] : '(N/A)',
    wiki: urls.length >= 2 ? urls[1] : '(N/A)',
    comiclink: urls.length >= 3 ? urls[2] : '(N/A)',
  }

  return normPersonagem;
}

/**
 * Handler para as mídias do personagem selecionado
 * @param {*} dados Dados de mídias
 */
const _handleMedia = (dados) => {
  let normDados = []
  const results = dados.data.data.results;

  normDados = results.map(result => {
    return ({
      nome: result.title,
      imagem: result.thumbnail ? `${result.thumbnail.path}/portrait_uncanny.${result.thumbnail.extension}` : null
    })
  })

  return normDados;
}