const palavraLimpa = (palavra) => {
  return palavra.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "");
};

export const verificaPalavrasDuplicadas = (texto) => {
  const listaPalavras = texto.toLowerCase().split(/\s+/).filter(Boolean);
  const resultado = {};
  
  listaPalavras.forEach((palavra) => {
    if (palavra.length >= 3) {
      const palavraLimpaFormatada = palavraLimpa(palavra);
      resultado[palavraLimpaFormatada] = (resultado[palavraLimpaFormatada] || 0) + 1;
    }
  });
  
  //  console.log('Palavras duplicadas:', resultado);
  return resultado;
};