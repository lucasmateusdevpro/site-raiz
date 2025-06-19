

const escolhaMaquinaImg = document.getElementById("escolhaMaquinaImg")
const resultado = document.getElementById("resultado")

const pointsOpponent = document.getElementById("pointsOpponent")
const myPoints = document.getElementById("myPoints")
let pointsOpponentIinicial = 0
let myPointsInicial = 0

function botaoClicado(escolhaHumana) {
    jogo(escolhaHumana, maquina())

}

function maquina() {
    const escolhaMaquina = ['pedra', 'papel', 'tesoura']

    const escolha = Math.floor(Math.random() * (2 - 0 + 1));

    if (escolhaMaquina[escolha] === "pedra") {
        escolhaMaquinaImg.innerText = "✊"
    }
    if (escolhaMaquina[escolha] === "papel") {
        escolhaMaquinaImg.innerText = "✋"
    }
    if (escolhaMaquina[escolha] === "tesoura") {
        escolhaMaquinaImg.innerText = "✌️"
    }
    return escolhaMaquina[escolha]
}

function jogo(humano, maquina) {




    if (humano === maquina) {
        resultado.style.color = " #51ff48 "
        resultado.innerText = "❌ Empate!!! ❌"
        console.log("deu empate")

    } else if ((humano === "papel" && maquina === "pedra") ||
        (humano === "pedra" && maquina === "tesoura") ||
        (humano === "tesoura" && maquina === "papel")) {

        resultado.style.color = "#4358fb"
        resultado.innerText = "👏Voce!!!👏"
        myPointsInicial = myPointsInicial + 1
       myPoints.innerText = myPointsInicial

        console.log("humano ganhou")


    } else {
        resultado.style.color = "rgb(249, 64, 64)"
        resultado.innerText = "👎Maquina!!!👎"
        pointsOpponentIinicial =  pointsOpponentIinicial + 1
        pointsOpponent.innerText = pointsOpponentIinicial

        console.log("maquina ganhou")
    }





}

/* 

papel pedra tesoura
*/



