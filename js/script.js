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


