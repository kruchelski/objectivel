// Basic import
import axios from 'axios';

const publicKey = process.env.REACT_APP_MARVEL_PUBLIC_KEY;

/**
 * Cria uma instância do Axios com os valores básicos definidos
 */
export default axios.create({
  baseURL: 'https://gateway.marvel.com//v1/public/',
  params: {
    apikey: publicKey
  }
})