
let real = 1.00
let dolar = 5.75
let euro = 6.51
let libra = 7.67
let biticon = 567855.28

let moedaSelecionada1 = real
let moedaSelecionada2 = real

function getCurrencyLabel(moeda) {
    switch (moeda) {
        case real: return 'BRL'
        case dolar: return 'USD'
        case euro: return 'EUR'
        case libra: return 'GBP'
        case biticon: return 'BTC'
        default: return 'BRL'
    }
}


function select1(valor1) {
    const img = document.getElementById("minhaImagem1")
    const texto1 = document.getElementById("texto1")
    const inputPlaceholder = document.getElementById("valueEntered")

    if (valor1 === "realBrasil1") {
        img.src = "img/brasil 2.png"
        texto1.innerText = "Real"
        moedaSelecionada1 = real
        inputPlaceholder.placeholder = "R$ 0,00"

    }

    if (valor1 === "dolarAmericano1") {
        img.src = "img/estados-unidos (1) 1.png";
        texto1.innerText = "Dólar";
        moedaSelecionada1 = dolar;
        inputPlaceholder.placeholder = "US$ 0,00"
    }

    if (valor1 === "euro1") {
        img.src = "img/euro.png";
        texto1.innerText = "Euro";
        moedaSelecionada1 = euro;
        inputPlaceholder.placeholder = "€ 0,00"
    }

    if (valor1 === "libra1") {
        img.src = "img/libra 1.png";
        texto1.innerText = "Libra";
        moedaSelecionada1 = libra;
        inputPlaceholder.placeholder = "£ 0,00"
    }

    if (valor1 === "bitcoin1") {
        img.src = "img/bitcoin 1.png";
        texto1.innerText = "Bitcoin";
        moedaSelecionada1 = biticon;
        inputPlaceholder.placeholder = "BTC 0.00000000 "
    }

    document.getElementById("volueSelect1").textContent =
        texto1.innerText + ": " +
        moedaSelecionada1.toLocaleString('pt-BR', {
            style: 'currency',
            currency: getCurrencyLabel(moedaSelecionada1)
        })

    document.getElementById("valueEntered").placeholder = inputPlaceholder.placeholder
    document.getElementById("meuBotao").click();
}

function select2(valor2) {

    const img = document.getElementById("minhaImagem2");
    const texto2 = document.getElementById("texto2");

    if (valor2 === "realBrasil2") {
        img.src = "img/brasil 2.png";
        texto2.innerText = "Real";
        moedaSelecionada2 = real;
    }
    if (valor2 === "dolarAmericano2") {
        img.src = "img/estados-unidos (1) 1.png";
        texto2.innerText = "Dólar";
        moedaSelecionada2 = dolar;
    }
    if (valor2 === "euro2") {
        img.src = "img/euro.png";
        texto2.innerText = "Euro";
        moedaSelecionada2 = euro;
    }
    if (valor2 === "libra2") {
        img.src = "img/libra 1.png";
        texto2.innerText = "Libra";
        moedaSelecionada2 = libra;
    }
    if (valor2 === "bitcoin2") {
        img.src = "img/bitcoin 1.png";
        texto2.innerText = "Bitcoin";
        moedaSelecionada2 = biticon;
    }

    document.getElementById("volueSelect2").textContent =
        texto2.innerText + ": " +
        moedaSelecionada2.toLocaleString('pt-BR', {
            style: 'currency',
            currency: getCurrencyLabel(moedaSelecionada2)
        })

    document.getElementById("meuBotao").click();
}

function getVolue() {
    const valueEntered = parseFloat(document.getElementById("valueEntered").value);
    if (isNaN(valueEntered)) return;

    const resultadoDolarReal = valueEntered * moedaSelecionada1 / moedaSelecionada2;

    document.getElementById("volueResult1").textContent = valueEntered.toLocaleString('pt-BR', {
        style: 'currency',
        currency: getCurrencyLabel(moedaSelecionada1)
    });

    document.getElementById("volueResult2").textContent = resultadoDolarReal.toLocaleString('pt-BR', {
        style: 'currency',
        currency: getCurrencyLabel(moedaSelecionada2)
    });
}
