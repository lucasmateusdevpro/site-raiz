/* efeitos dos botoes de seleção dos projetos */

//abre o menu
function buttonSelect() {
    document.querySelector(".container-options").style.visibility = "visible"

}

document.addEventListener("click", (e) => {
    const select = document.querySelector(".container-select")
    const options = document.querySelector(".container-options")


    // Se o clique NÃO foi dentro do menu nem no botão, fecha
    if (!select.contains(e.target) && !options.contains(e.target)) {
        if (window.innerWidth < 10000) {
            options.style.visibility = "hidden"
        }
    }
});


let containerOptions = document.querySelector(".container-options")
let textoButonSelect = document.querySelector(".texto-select")

function options(value) {
    containerOptions.style.visibility = "hidden"
    textoButonSelect.innerHTML = ` ${value} <span> ▼</span>`

}



const list = document.querySelector("ul")
let numeroDeProjetos = document.querySelector(".numero-de-projetos")
let contador = 0


/* function options(botao){ */


listaDeProdutos.forEach(produtos => {
 
list.innerHTML += `
  <li class="projeto scroll-reveal">
    <a href="${produtos.href}">
      <h3 class="titulo">${produtos.titulo} <span class="seta"> → </span></h3>
      <img src="${produtos.src}" alt="${produtos.titulo}" class="imagem" />
    </a>
  </li>
`

   contador += 1
})

numeroDeProjetos.innerHTML = contador
/* } */
console.log(contador)





















/* const lista = document.querySelector("ul")
const numeroPagina = document.querySelector("#numero-pagina");

let paginaAtual = 1;
const itensPorPagina = 6;

function renderizarPagina() {
  lista.innerHTML = "";

  let inicio = (paginaAtual - 1) * itensPorPagina;
  let fim = inicio + itensPorPagina;
  let projetosPagina = listaDeProdutos.slice(inicio, fim);

  projetosPagina.forEach(produtos => {
    lista.innerHTML += `
  <li class="projeto scroll-reveal">
    <a href="${produtos.href}">
      <h3 class="titulo">${produtos.titulo} <span class="seta"> → </span></h3>
      <img src="${produtos.src}" alt="${produtos.titulo}" class="imagem" />
    </a>
  </li>
`
  });

  numeroPagina.textContent = paginaAtual;
}

function trocarPagina(direcao) {
  const totalPaginas = Math.ceil(listaDeProdutos.length / itensPorPagina);
  paginaAtual += direcao;

  if (paginaAtual < 1) paginaAtual = 1;
  if (paginaAtual > totalPaginas) paginaAtual = totalPaginas;

  renderizarPagina();
}

renderizarPagina();
 */











