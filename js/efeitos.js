/* efeitos mause */

const efeito = document.getElementById('fundoEfeito');

document.addEventListener('mousemove', (e) => {
    efeito.style.left = `${e.clientX}px`;
    efeito.style.top = `${e.clientY}px`;
});


/* efeitos texto aba navegador */

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


/* efeitos menu flutuante contatos */

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


/* efeitos dos projetos ao passar o mause*/

// Seleciona todos os blocos de projeto
const projetos = document.querySelectorAll(".projeto")

projetos.forEach(function (projeto) {
    // Captura os elementos internos usando querySelector relativo ao projeto
    const span = projeto.querySelector(".seta")
    const titulo = projeto.querySelector(".titulo")
    const imagem = projeto.querySelector(".imagem")

    // Evento de mouseenter
    projeto.addEventListener("mouseenter", function () {
        span.style.visibility = "visible"
        span.style.transition = "transform 0.5s ease"
        span.style.transform = "translateX(30px)"
        titulo.style.color = "#B74AFC"
        imagem.style.border = "1px solid #B74AFC"
    })

    // Evento de mouseleave
    projeto.addEventListener("mouseleave", function () {
        span.style.visibility = "hidden"
        span.style.transition = "transform 0.5s ease"
        span.style.transform = "translateX(0px)"
        titulo.style.color = "#CCFAFC"
        imagem.style.border = "1px solid #CCFAFC"
    })
})

/* efeitos menu resposivo  */

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

/* Efieto dos itens aparecendo na tela */

const elementos = document.querySelectorAll('.scroll-reveal');

  function revelarAoScroll() {
    const alturaTela = window.innerHeight;

    elementos.forEach(el => {
      const distanciaTopo = el.getBoundingClientRect().top;

      if (distanciaTopo < alturaTela - 100) {
        el.classList.add('visible');
      }
    });
  }

  window.addEventListener('scroll', revelarAoScroll);
  window.addEventListener('load', revelarAoScroll); // chama quando carrega


  /* botão voltar ao topo */

    const topButton = document.getElementById("topButton");

  window.onscroll = function () {
    if (document.body.scrollTop > 600 || document.documentElement.scrollTop > 600) {
      topButton.style.display = "block";
    } else {
      topButton.style.display = "none";
    }
  };

  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }


   const sections = document.querySelectorAll("section");
  const navLinks = document.querySelectorAll("nav a");

  window.addEventListener("scroll", () => {
    let current = "";

    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      if (pageYOffset >= sectionTop - 60) {
        current = section.getAttribute("id");
      }
    });

    navLinks.forEach(link => {
      link.classList.remove("active");
      if (link.getAttribute("href").includes(current)) {
        link.classList.add("active");
      }
    });
  });




