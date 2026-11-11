# Word Frequency CLI 📊

Um script simples de linha de comando (CLI) construído em Node.js para ler arquivos de texto, contar a ocorrência de cada palavra e identificar palavras duplicadas ou mais frequentes.

## 🚀 Funcionalidades

- **Leitura rápida:** Utiliza o módulo nativo `fs` para leitura assíncrona do arquivo.
- **Filtro inteligente:** Ignora palavras com menos de 3 caracteres (evitando contar artigos e preposições curtas desnecessárias).
- **Sanitização de texto:** Remove pontuações e caracteres especiais automaticamente (`.,/#!$%^&*;:{}=\-_~()`).
- **Case-insensitive:** Trata letras maiúsculas e minúsculas da mesma forma.

## 🛠️ Pré-requisitos

Para rodar este projeto, você precisa ter o [Node.js](https://nodejs.org/) instalado na sua máquina.

## ⚙️ Como usar

1. Clone este repositório:
```bash
git clone [https://github.com/SEU_USUARIO/NOME_DO_REPOSITORIO.git](https://github.com/SEU_USUARIO/NOME_DO_REPOSITORIO.git)
