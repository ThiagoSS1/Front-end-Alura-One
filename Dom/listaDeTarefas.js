import BotaoConclui from "./componentes/concluiTarefa.js";
import BotaoDeleta from "./componentes/deletaTarefa.js";

const criarTarefa = (event) => {

  event.preventDefault();

  const input = document.querySelector('[data-form-input]');
  const valor = input.value;
  console.log(valor);

  const tarefa = document.querySelector('[data-list]');
  const lista = document.createElement('li');
  lista.classList.add('task');
  const conteudo = `<p class="content">${valor}</p>`;

  lista.innerHTML = conteudo;

  lista.appendChild(BotaoConclui());
  lista.appendChild(BotaoDeleta());
  tarefa.appendChild(lista);


}

const btnForm = document.querySelector('[data-form-button]');

btnForm.addEventListener('click', criarTarefa)

