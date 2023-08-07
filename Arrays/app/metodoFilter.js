const btn = document.querySelectorAll('.btn');

btn.forEach(callbackfn => {
  callbackfn.addEventListener('click', filtrarLivros)
})


function filtrarLivros () {
  const elementoBtn = document.querySelector(`#${this.id}`);

  const categoria = elementoBtn.value;

  const livrosFiltrados = categoria === 'disponivel' ? filtrarPorDisponibilidade() : filtrarPorCategoria(categoria) 
  console.log("filter",livrosFiltrados);
  exibirLivros(livrosFiltrados);
  if (categoria === 'disponivel') {
    const valorTotalDeLivrosDisponiveis = calcularValorTotalDeLivrosDisponiveis(livrosFiltrados);
    exibirValorTotalDeLivrosDisponiveis(valorTotalDeLivrosDisponiveis);
  }
}


function filtrarPorCategoria (categoria) {
  return livros.filter(livro => livro.categoria === categoria);
}

function filtrarPorDisponibilidade () {
  return livros.filter(livro => { 
    return livro.quantidade > 0; 
  });
}


function exibirValorTotalDeLivrosDisponiveis (livros) {
  elementoComValorTotakDeLivrosDisponiveis.innerHTML = `
  <div class="livros__disponiveis">
    <p>Todos os livros disponíveis por R$ <span id="valor">${livros}</span></p>
  </div>
  `;
}

