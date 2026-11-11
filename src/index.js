const fs = require('fs');
const caminhoArquivo = process.argv[2];
fs.readFile(caminhoArquivo, 'utf8', (err, texto) => {
  if (err) {
    console.error('Erro ao ler o arquivo:', err);
    return;
  }
    verificaPalavrasDuplicadas(texto);
});
const palavraLimpa = (palavra) => {
    return palavra.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "")
}
const verificaPalavrasDuplicadas = (texto) => {
    const listaPalavras = texto.toLowerCase().split(/\s+/).filter(Boolean);
    const resultado = {};
    listaPalavras.forEach((palavra) => {
        if (palavra.length >=3) {
        const palavraLimpaFormatada = palavraLimpa(palavra);    
        resultado[palavraLimpaFormatada] = (resultado[palavraLimpaFormatada] || 0) + 1;
        }
    });
    console.log('Palavras duplicadas:', resultado);
}