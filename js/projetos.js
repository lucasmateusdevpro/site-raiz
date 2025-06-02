
/* console.log()

divProjetos.addEventListener("mouseenter", function () {
    document.getElementById("span").style.visibility = "visible"
    document.getElementById("span").style.transition = "transform 0.5s ease"
    document.getElementById("span").style.transform = "translateX(30px)"
    document.getElementById("h3projetos").style.color = " #B74AFC"
    document.getElementById("imgProjetos").style.border =  " 3px solid  #B74AFC"

})

divProjetos.addEventListener("mouseleave", function () {
     document.getElementById("span").style.visibility = "hidden" 
      document.getElementById("span").style.transition = "visibility 1s ease "        
    document.getElementById("span").style.transform = "translateX(0px)"
    
    document.getElementById("h3projetos").style.transition = "color 0.5s ease"
    document.getElementById("span").style.transition = "transform 1s ease"
     document.getElementById("h3projetos").style.color ="  #CCFAFC"
     document.getElementById("imgProjetos").style.border =  " 3px solid  #CCFAFC"
})

 */

// Seleciona todos os blocos de projeto
const projetos = document.querySelectorAll(".projeto")

projetos.forEach(function(projeto) {
    // Captura os elementos internos usando querySelector relativo ao projeto
    const span   = projeto.querySelector(".seta")
    const titulo = projeto.querySelector(".titulo")
    const imagem = projeto.querySelector(".imagem")

    // Evento de mouseenter
    projeto.addEventListener("mouseenter", function () {
        span.style.visibility = "visible"
        span.style.transition = "transform 0.5s ease"
        span.style.transform = "translateX(30px)"
        titulo.style.color = "#B74AFC"
        imagem.style.border = "3px solid #B74AFC"
    })

    // Evento de mouseleave
    projeto.addEventListener("mouseleave", function () {
        span.style.visibility = "hidden"
        span.style.transition = "transform 0.5s ease"
        span.style.transform = "translateX(0px)"
        titulo.style.color = "#CCFAFC"
        imagem.style.border = "3px solid #CCFAFC"
    })
})
