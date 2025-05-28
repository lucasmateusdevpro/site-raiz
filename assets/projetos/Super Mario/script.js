






let formEntrada = -120
let animaEntrada

function botaoDiv() {
  animaEntrada = setInterval(() => {

    formEntrada++

    document.getElementById("formularioEntreEmContato").style.left = formEntrada + "%"
    document.getElementById("filtroOrcamento").style. visibility = "visible"
    console.log(formEntrada + "%")

    if (formEntrada >= 50) {

      clearInterval(animaEntrada)
      formEntrada = -120
    }

  }, 1) /* <-- velocidade */
}

let formSaida = 50
let animaSaida

function mascara() {
  animaSaida = setInterval(() => {

    formSaida--

    document.getElementById("formularioEntreEmContato").style.left = formSaida + "%"

    console.log(formSaida + "%")

    if (formSaida <= -120) {
      clearInterval(animaSaida)
      formSaida = 50
    }
        if (formSaida == -40 ) {  /* deley para o fintro sumir */
    document.getElementById("filtroOrcamento").style.visibility  = "hidden"
    }
  }, 1) /* <-- velocidade */
}

















