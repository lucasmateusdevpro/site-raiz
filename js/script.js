/* efeitos mause */

const efeito = document.getElementById('fundoEfeito');

document.addEventListener('mousemove', (e) => {
    efeito.style.left = `${e.clientX}px`;
    efeito.style.top = `${e.clientY}px`;
});


const tituloOriginal = document.title;

document.addEventListener("visibilitychange", () => {
    if (document.hidden) {
        document.title = "🚷 Volta aqui! 🚷";
    } else {
        document.title = "🎉 Que bom que voltou!";

        // Volta ao título original depois de 2 segundos
        setTimeout(() => {
            document.title = tituloOriginal;
        }, 2000);
    }
})

let menuFlutuante = document.getElementById("menuContatosFlutuante")
let tempo

menuFlutuante.addEventListener("mouseenter", () => {
    document.getElementById("menuContatoFlutuante").style.visibility = "visible"


    clearTimeout(tempo)
});

menuFlutuante.addEventListener("mouseleave", () => {
    tempo = setTimeout(() => {
        document.getElementById("menuContatoFlutuante").style.visibility = "hidden"
    }, 1000)
})




  /* Esta função cuida do menu lateral */

/* const entrada = "0px"
const saida = "-400px"

menu.addEventListener("mouseenter", () => {
        document.getElementById("menuResponsivoLink").style.left = saida
    document.getElementById("buttonMenuResponsivo").style.visibility = "visible"

    console.log(menu)
})

function menuResponsivoButton() {
    document.getElementById("menuResponsivoLink").style.left = entrada
    document.getElementById("buttonMenuResponsivo").style.visibility = "hidden"
}

function backgroundFiltro() {
  if (window.innerWidth >= 1000) { */
    // Executa somente em telas menores que 1000px
/*     document.getElementById("buttonMenuResponsivo").style.visibility = "hidden";
}else{
        document.getElementById("menuResponsivoLink").style.left = saida
    document.getElementById("buttonMenuResponsivo").style.visibility = "visible"
}}

window.addEventListener("resize", () => {
    if (window.innerWidth < 1000) { */
        /* console.log("Tela menor que 1000px — modo mobile") */        
/*         document.getElementById("buttonMenuResponsivo").style.visibility = "visible"
    } else { */
        /* console.log("Tela maior que 1000px — modo desktop") */
       /*  document.getElementById("menuResponsivoLink").style.left = saida
        document.getElementById("buttonMenuResponsivo").style.visibility = "hidden"
    }
}); */
const entrada = "0px";
const saida = "-400px";

// Alternar o menu ao clicar no botão
document.getElementById("buttonMenuResponsivo").addEventListener("click", () => {
    document.getElementById("menuResponsivoLink").style.left = entrada;
    document.getElementById("buttonMenuResponsivo").style.visibility = "hidden";
});

// Clique fora do menu fecha ele
document.addEventListener("click", (e) => {
    const menu = document.getElementById("menuResponsivoLink");
    const botao = document.getElementById("buttonMenuResponsivo");

    // Se o clique NÃO foi dentro do menu nem no botão, fecha
    if (!menu.contains(e.target) && !botao.contains(e.target)) {
        if (window.innerWidth < 1000) {
            menu.style.left = saida;
            botao.style.visibility = "visible";
        }
    }
});

// Quando a tela redimensiona
window.addEventListener("resize", () => {
    const menu = document.getElementById("menuResponsivoLink");
    const botao = document.getElementById("buttonMenuResponsivo");

    if (window.innerWidth >= 1000) {
        // Esconde o botão e o menu (modo desktop)
        menu.style.left = saida;
        botao.style.visibility = "hidden";
    } else {
        // Mostra o botão (modo mobile)
        botao.style.visibility = "visible";
    }
});
