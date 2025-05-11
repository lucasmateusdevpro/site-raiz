


function selectCor1(valor) {
    const img1 = document.getElementById("logo1")
    const img2 = document.getElementById("logo2")
    const body = document.getElementsByTagName("body")

    if (valor === "white") {
        img1.src = "assets/logo1.png"
        img2.src = "assets/logo2.png"
        document.body.style.background = "#FFFFFF";
        localStorage.setItem("corSelecionada", "white"); 

    }

    if (valor === "black") {
        img1.src = "assets/logo1black.png"
        img2.src = "assets/logo2black.png"
        document.body.style.background = "#1F262E";
        localStorage.setItem("corSelecionada", "black"); 

    }

}

window.addEventListener("DOMContentLoaded", function () {
    const corSalva = localStorage.getItem("corSelecionada");

    if (corSalva === "white") {
        document.body.style.background = "#FFFFFF";
        document.getElementById("logo1").src = "assets/logo1.png";
        document.getElementById("logo2").src = "assets/logo2.png";
    }

    if (corSalva === "black") {
        document.body.style.background = "#1F262E";
        document.getElementById("logo1").src = "assets/logo1black.png";
        document.getElementById("logo2").src = "assets/logo2black.png";
    }
});