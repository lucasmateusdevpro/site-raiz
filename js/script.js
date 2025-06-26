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



listaDeProdutos.forEach(produtos => {

list.innerHTML += `
  <li class="projeto">
    <a href="${produtos.href}">
      <h3 class="titulo">${produtos.titulo} <span class="seta"> → </span></h3>
      <img src="${produtos.src}" alt="${produtos.titulo}" class="imagem" />
    </a>
  </li>
`
    
});











console.log(list)
console.log(listaDeProdutos)


