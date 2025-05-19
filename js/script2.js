
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
});

/* linck sobre eventos*/
/*                        entrada enetos sobre*/
sobre.addEventListener("mouseenter", function () {
    document.getElementById("linkSobre").style.color = "rgba(56, 191, 248, 0.33)"
    document.getElementById("linkSobre").style.textDecoration = "underline rgb(0, 179, 255)"
    document.getElementById("sobreLinha").style.color = "rgb(0, 179, 255)"
    document.getElementById("sobreLinha").style.transition = "transform 0.5s ease"
    document.getElementById("sobreLinha").style.transform = "translateX(30px)"
})

linkSobre.addEventListener("mouseenter", function () {
    document.getElementById("linkSobre").style.color = "rgba(56, 191, 248, 0.33)"
    document.getElementById("linkSobre").style.textDecoration = "underline rgb(0, 179, 255)"
    document.getElementById("sobreLinha").style.color = "rgb(0, 179, 255)"
    document.getElementById("sobreLinha").style.transition = "transform 0.5s ease"
    document.getElementById("sobreLinha").style.transform = "translateX(30px)"

})
/*                              saida eventos sobre*/
sobre.addEventListener("mouseleave", function () {
        document.getElementById("linkSobre").style.color = "rgb(250, 250, 250)"
    document.getElementById("sobreLinha").style.color = "rgb(254, 255, 255)"
    document.getElementById("sobreLinha").style.transition = "transform 0.5s ease";
    document.getElementById("sobreLinha").style.transform = "translateX(0px)";
    document.getElementById("linkSobre").style.textDecoration = "none"
})

linkSobre.addEventListener("mouseleave", function () {
        document.getElementById("linkSobre").style.color = "rgb(250, 250, 250)"
    document.getElementById("sobreLinha").style.color = "rgb(254, 255, 255)"
    document.getElementById("sobreLinha").style.transition = "transform 0.5s ease";
    document.getElementById("sobreLinha").style.transform = "translateX(0px)";
    document.getElementById("linkSobre").style.textDecoration = "none"
})


/*  linck  projetos Eventos*/
/*                              entrada enetos Projetos*/
projetos.addEventListener("mouseenter", function () {
    document.getElementById("linkProjetos").style.color = "rgba(56, 191, 248, 0.33)"
    document.getElementById("linkProjetos").style.textDecoration = "underline"
    document.getElementById("projetosLinha").style.color = "rgb(0, 179, 255)"
    document.getElementById("projetosLinha").style.transition = "transform 0.5s ease";
    document.getElementById("projetosLinha").style.transform = "translateX(30px)";
})

linkProjetos.addEventListener("mouseenter", function () {
    document.getElementById("linkProjetos").style.color = "rgb(0, 179, 255)"
    document.getElementById("linkProjetos").style.textDecoration = "underline"
    document.getElementById("projetosLinha").style.color = "rgb(0, 179, 255)"
    document.getElementById("projetosLinha").style.transition = "transform 0.5s ease";
    document.getElementById("projetosLinha").style.transform = "translateX(30px)";

})

/*                             sainda enetos Projetos*/
projetos.addEventListener("mouseleave", function () {
    document.getElementById("projetosLinha").style.color = "rgb(254, 255, 255)"
    document.getElementById("projetosLinha").style.transition = "transform 0.5s ease";
    document.getElementById("projetosLinha").style.transform = "translateX(0px)";
    document.getElementById("linkProjetos").style.textDecoration = "none"
})

linkProjetos.addEventListener("mouseleave", function () {
    document.getElementById("projetosLinha").style.color = "rgb(254, 255, 255)"
    document.getElementById("projetosLinha").style.transition = "transform 0.5s ease";
    document.getElementById("projetosLinha").style.transform = "translateX(0px)";
    document.getElementById("linkProjetos").style.textDecoration = "none"
})

/*                      Eventos dos projetos 1  */
liProjetos1.addEventListener("mouseenter", function () {
    document.getElementById("liProjetos1").style.backgroundColor = " #00000033 "
    document.getElementById("liProjetos1").style.borderRadius = " 10px "
    document.getElementById("tituloProjeto1").style.color = "rgba(56, 191, 248, 0.33)"
    document.getElementById("imgProjeto1").style.border = "0.7px solid rgba(56, 191, 248, 0.33)"
    document.getElementById("spanProjeto1").style.color = "rgb(0, 179, 255)"
    document.getElementById("spanProjeto1").style.transition = "transform 0.5s ease";
    document.getElementById("spanProjeto1").style.transform = "translateX(30px)";
})
liProjetos1.addEventListener("mouseleave", function () {
    document.getElementById("tituloProjeto1").style.color = "rgb(255, 255, 255)"
    document.getElementById("imgProjeto1").style.border = "0px solid rgba(255, 255, 255, 0.75)"
    document.getElementById("spanProjeto1").style.transform = "translateX(0px)";
    document.getElementById("liProjetos1").style.backgroundColor = "transparent "
    document.getElementById("spanProjeto1").style.color = "rgb(255, 255, 255)"
})

/*                                                   Eventos dos projetos 2 */


liProjetos2.addEventListener("mouseenter", function () {
    document.getElementById("liProjetos2").style.backgroundColor = " #00000033 "
    document.getElementById("liProjetos2").style.borderRadius = " 10px "
    document.getElementById("tituloProjeto2").style.color = "rgba(56, 191, 248, 0.33)"
    document.getElementById("imgProjeto2").style.border = "0.7px solid rgba(56, 191, 248, 0.33)"
    document.getElementById("spanProjeto2").style.color = "rgb(0, 179, 255)"
    document.getElementById("spanProjeto2").style.transition = "transform 0.5s ease";
    document.getElementById("spanProjeto2").style.transform = "translateX(30px)";
})
liProjetos2.addEventListener("mouseleave", function () {
    document.getElementById("tituloProjeto2").style.color = "rgb(255, 255, 255)"
    document.getElementById("imgProjeto2").style.border = "0px solid rgba(255, 255, 255, 0.75)"
    document.getElementById("spanProjeto2").style.transform = "translateX(0px)";
    document.getElementById("liProjetos2").style.backgroundColor = "transparent "
    document.getElementById("spanProjeto2").style.color = "rgb(255, 255, 255)"
})

/*                                                   Eventos dos projetos 3 */


liProjetos3.addEventListener("mouseenter", function () {
    document.getElementById("liProjetos3").style.backgroundColor = " #00000033 "
    document.getElementById("liProjetos3").style.borderRadius = " 10px "
    document.getElementById("tituloProjeto3").style.color = "rgba(56, 191, 248, 0.33)"
    document.getElementById("imgProjeto3").style.border = "0.7px solid rgba(56, 191, 248, 0.33)"
    document.getElementById("spanProjeto3").style.color = "rgb(0, 179, 255)"
    document.getElementById("spanProjeto3").style.transition = "transform 0.5s ease";
    document.getElementById("spanProjeto3").style.transform = "translateX(30px)";
})
liProjetos3.addEventListener("mouseleave", function () {
    document.getElementById("tituloProjeto3").style.color = "rgb(255, 255, 255)"
    document.getElementById("imgProjeto3").style.border = "0px solid rgba(255, 255, 255, 0.75)"
    document.getElementById("spanProjeto3").style.transform = "translateX(0px)";
    document.getElementById("liProjetos3").style.backgroundColor = "transparent "
    document.getElementById("spanProjeto3").style.color = "rgb(255, 255, 255)"
})

/*                                                   Eventos dos projetos 4 */


liProjetos4.addEventListener("mouseenter", function () {
    document.getElementById("liProjetos4").style.backgroundColor = " #00000033 "
    document.getElementById("liProjetos4").style.borderRadius = " 10px "
    document.getElementById("tituloProjeto4").style.color = "rgba(56, 191, 248, 0.33)"
    document.getElementById("imgProjeto4").style.border = "0.7px solid rgba(56, 191, 248, 0.33)"
    document.getElementById("spanProjeto4").style.color = "rgb(0, 179, 255)"
    document.getElementById("spanProjeto4").style.transition = "transform 0.5s ease";
    document.getElementById("spanProjeto4").style.transform = "translateX(30px)";

})
liProjetos4.addEventListener("mouseleave", function () {
    document.getElementById("tituloProjeto4").style.color = "rgb(255, 255, 255)"
    document.getElementById("imgProjeto4").style.border = "0px solid rgba(255, 255, 255, 0.75)"
    document.getElementById("spanProjeto4").style.transform = "translateX(0px)";
    document.getElementById("liProjetos4").style.backgroundColor = "transparent "
    document.getElementById("spanProjeto4").style.color = "rgb(255, 255, 255)"
})







linkNovaProjetos.addEventListener("mouseenter", function () {
    document.getElementById("linkNovaProjetos").style.color = "rgba(56, 191, 248, 0.33)"
    document.getElementById("linkNovaProjetosSpan").style.color = "rgb(0, 179, 255)"
    document.getElementById("linkNovaProjetosSpan").style.transition = "transform 0.5s ease";
    document.getElementById("linkNovaProjetosSpan").style.transform = "translateX(30px)";

})

linkNovaProjetos.addEventListener("mouseleave", function () {
    document.getElementById("linkNovaProjetos").style.color = "rgb(255, 255, 255)"
    document.getElementById("linkNovaProjetosSpan").style.color = "rgb(255, 255, 255)"
    document.getElementById("linkNovaProjetosSpan").style.transition = "transform 0.5s ease";
    document.getElementById("linkNovaProjetosSpan").style.transform = "translateX(0px)";
})