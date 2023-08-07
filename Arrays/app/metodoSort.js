let btnOrdenarPreco = document.querySelector('#btnOrdenarPorPreco');

btnOrdenarPreco.addEventListener('click', ordenarPorPreco);


function ordenarPorPreco() {
  const livrosOrdenados = livros.sort((a, b) => a.preco - b.preco);

  exibirLivros(livrosOrdenados);

}