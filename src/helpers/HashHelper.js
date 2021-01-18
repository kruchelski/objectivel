// Imports de secrets
const publicKey = process.env.REACT_APP_MARVEL_PUBLIC_KEY;
const privateKey = process.env.REACT_APP_MARVEL_PRIVATE_KEY;

// Imports de bibliotecas
const md5 = require('md5');

const calcularHashTimestamp = () => {
  const ts = new Date().valueOf();
  const textoParaHash = `${ts}${privateKey}${publicKey}`;
  console.log(textoParaHash);
  const hash = md5(textoParaHash);
  console.log(hash)
  return {
    hash,
    ts
  }
}

export { calcularHashTimestamp }