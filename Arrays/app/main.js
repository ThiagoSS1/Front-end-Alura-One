let livros = [];

const endpointDaAPI = 'https://guilhermeonrails.github.io/casadocodigo/livros.json';

getBuscarLivros()

async function getBuscarLivros() {
  const buscarLivros = await fetch(endpointDaAPI);
  livros = await buscarLivros.json();
  console.log(livros);
  livros = aplicarDesconto(livros);
  exibirLivros(livrosComDesconto);
}


