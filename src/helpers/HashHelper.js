// Imports de secrets
const publicKey = process.env.REACT_APP_MARVEL_PUBLIC_KEY;
const privateKey = process.env.REACT_APP_MARVEL_PRIVATE_KEY;

// Imports de bibliotecas
const md5 = require('md5');

/**
 * Faz o cálculo do hash md5 e do timestamp para realizar requisições na API da marvel
 */
const calcularHashTimestamp = () => {
  const ts = new Date().valueOf();
  const textoParaHash = `${ts}${privateKey}${publicKey}`;
  const hash = md5(textoParaHash);
  return {
    hash,
    ts
  }
}

export { calcularHashTimestamp }