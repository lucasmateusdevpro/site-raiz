

function pegarValormais() {
    const valor1 = parseFloat(document.getElementById("campo1").value);
    const valor2 = parseFloat(document.getElementById("campo2").value);
    const resultado = valor1 + valor2;
    document.getElementById("resultado").textContent = (resultado);
    console.log(resultado);
}

function pegarValormenos() {
    const valor1 = parseFloat(document.getElementById("campo1").value);
    const valor2 = parseFloat(document.getElementById("campo2").value);
    const resultado = valor1 - valor2;
    document.getElementById("resultado").textContent = (resultado);
    console.log(resultado);
}

function pegarValorvezes() {
    const valor1 = parseFloat(document.getElementById("campo1").value);
    const valor2 = parseFloat(document.getElementById("campo2").value);
    const resultado = valor1 * valor2;
    document.getElementById("resultado").textContent = (resultado);
    console.log(resultado);
}

function pegarValordividir() {
    const valor1 = parseFloat(document.getElementById("campo1").value);
    const valor2 = parseFloat(document.getElementById("campo2").value);
    const resultado = valor1 / valor2;
    document.getElementById("resultado").textContent = (resultado);
    console.log(resultado);
}



