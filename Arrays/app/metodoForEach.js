const elementoParaInserirLivros = document.querySelector('#livros');
const elementoComValorTotakDeLivrosDisponiveis = document.querySelector('#valor_total_livros_disponiveis');

function exibirLivros(listaDeLivros) {
  elementoComValorTotakDeLivrosDisponiveis.innerHTML = '';
  elementoParaInserirLivros.innerHTML = '';
  listaDeLivros.forEach( livros => {
      let disponibilidade = livros.quantidade > 0 ? 'livro__imagens' : 'livros__imagens indisponivel';
      elementoParaInserirLivros.innerHTML += `
      <div class="livro">
      <img class="${disponibilidade} " src=${livros.imagem} alt=${livros.alt} />
      <h2 class="livro__titulo">
      ${livros.titulo}
      </h2>
      <p class="livro__descricao">${livros.autor}</p>
      <p class="livro__preco" id="preco">R$${livros.preco.toFixed(2)}</p>
      <div class="tags">
        <span class="tag">${livros.categoria}</span>
      </div>
    </div>   
      `
  })
}



