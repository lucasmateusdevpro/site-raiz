

document.addEventListener("keydown", function (event) {
    const tecla = event.key;

    if (!isNaN(tecla)) {
        // Se for número (0 a 9)
        numero(tecla);
    }

    if (tecla === "+") {
        clicarOperador("+");
    }

    if (tecla === "-") {
        clicarOperador("-");
    }

    if (tecla === "*") {
        clicarOperador("×");
    }

    if (tecla === "/") {
        clicarOperador("÷");
    }

    if (tecla === "Enter") {
        calcular();
    }

    if (tecla === "c" || tecla === "C" || tecla === "Backspace") {
        linpar();
    }
    if (tecla === ".") {
        ponto('.');
    }
});


let numeroX1 = ""
let numeroX2 = ""
let operador = ""
let numeroDigitado = document.getElementById("numeroDigitado")
let resultado = document.getElementById("resultado")


function numero(value) {
    numeroX1 += value
    numeroDigitado.innerText = numeroX1
    console.log(numeroX1)

}
function ponto(value) {
    numeroX1 += value

}

function clicarOperador(value) {
    document.getElementById("operadorTela").innerText = value
    numeroX2 = numeroX1
    numeroDigitado.innerText = numeroX1, value
    numeroX1 = ""
    operador = value

}

function calcular() {
    const num1 = parseFloat(numeroX2);
    const num2 = parseFloat(numeroX1);

    if (operador === "+") {

        resultado.innerText = `= ${num1 + num2}`

    }
    if (operador === "-") {

        resultado.innerText = `= ${num1 - num2}`

    }
    if (operador === "×") {

        resultado.innerText = `= ${num1 * num2}`

    }
    if (operador === "÷") {

        resultado.innerText = `= ${num1 / num2}`

    }

    console.log(num1, operador, num2, "=", resultado.innerText)

}

function linpar() {
    numeroX1 = ""
    numeroX2 = ""
    operador = ""
    numeroDigitado.innerText = "0"
    resultado.innerText = "0"
    document.getElementById("operadorTela").innerText = ""
}