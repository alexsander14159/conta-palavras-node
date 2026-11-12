import fs from 'fs';
import { verificaPalavrasDuplicadas } from './src/index.js';

const caminhoArquivo = process.argv[2];
const endereço = process.argv[3] || '.';

if (!caminhoArquivo) {
  console.error('Por favor, informe o caminho do ficheiro de texto.');
  process.exit(1);
}

fs.readFile(caminhoArquivo, 'utf8', (err, texto) => {
  if (err) {
    console.error('Erro ao ler o arquivo:', err);
    return;
  }
  const listaPalavras = verificaPalavrasDuplicadas(texto);
  criaESalvaArquivo(listaPalavras,endereço);
});
async function criaESalvaArquivo(listaPalavavras,endereço) {
    const arquivoSaida = `${endereço}/palavras_duplicadas.txt`;
    const textoPalavras = JSON.stringify(listaPalavavras, null, 2);
    await fs.writeFile(arquivoSaida, textoPalavras, (err) => {
      if (err) {
        console.error('Erro ao salvar o arquivo:', err);
      } else {
        console.log(`Arquivo salvo em: ${arquivoSaida}`);
      }
    });
    
}