function calcularValorTotalDeLivrosDisponiveis (livros) {
  return livros.reduce((total, livro) => {
    console.log(total + livro.preco);
    return total + livro.preco;
  }, 0);
}