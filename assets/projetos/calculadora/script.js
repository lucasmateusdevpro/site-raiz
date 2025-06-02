

function pegarValormais() {
    const valor1 = parseFloat(document.getElementById("campo1").value);
    const valor2 = parseFloat(document.getElementById("campo2").value);
    const resultado = valor1 + valor2;
    document.getElementById("resultado").textContent = (resultado);
    document.getElementById("resultado").style.color = "rgba(255, 255, 255, 0.52) "
    console.log(resultado);
}

function pegarValormenos() {
    const valor1 = parseFloat(document.getElementById("campo1").value);
    const valor2 = parseFloat(document.getElementById("campo2").value);
    const resultado = valor1 - valor2;
    document.getElementById("resultado").textContent = (resultado);
    document.getElementById("resultado").style.color = "rgba(255, 255, 255, 0.52) "
    console.log(resultado);
}

function pegarValorvezes() {
    const valor1 = parseFloat(document.getElementById("campo1").value);
    const valor2 = parseFloat(document.getElementById("campo2").value);
    const resultado = valor1 * valor2;
    document.getElementById("resultado").textContent = (resultado);
    document.getElementById("resultado").style.color = "rgba(255, 255, 255, 0.52) "
    console.log(resultado);
}

function pegarValordividir() {
    const valor1 = parseFloat(document.getElementById("campo1").value);
    const valor2 = parseFloat(document.getElementById("campo2").value);
    const resultado = valor1 / valor2;
    document.getElementById("resultado").textContent = (resultado);
    document.getElementById("resultado").style.color = "rgba(255, 255, 255, 0.52) "
    console.log(resultado);
}



