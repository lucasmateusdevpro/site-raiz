





 

function selectCor1(valor) {
    const img1 = document.getElementById("logo1")
    const img2 = document.getElementById("logo2")
    const body = document.getElementsByTagName("body")
    const favicon = document.getElementById("favicon")

    if (valor === "white") {
        favicon.href = "assets/favicon/favicon.ico"
        img2.src = "assets/images/baner.png"
        img1.src = "assets/images/logo1.png"
        document.body.style.background = "#FFFFFF";
        localStorage.setItem("corSelecionada", "white"); 

    }

    if (valor === "black") {
        favicon.href = "assets/favicon/favicon-black.ico"
        img2.src = "assets/images/baner-black.png"
        img1.src = "assets/images/logo1-black.png"
        document.body.style.background = "#1F262E";
        localStorage.setItem("corSelecionada", "black"); 

    }

}

window.addEventListener("DOMContentLoaded", function () {
    const corSalva = localStorage.getItem("corSelecionada");

    if (corSalva === "white") {
        document.body.style.background = "#FFFFFF";
        document.getElementById("logo1").src = "assets/images/logo1.png";
        document.getElementById("logo2").src = "assets/images/baner.png"
        document.getElementById("favicon").href = "assets/favicon/favicon.ico"
    }

    if (corSalva === "black") {
        document.body.style.background = "#1F262E";
        document.getElementById("logo1").src = "assets/images/logo1-black.png"
        document.getElementById("logo2").src = "assets/images/baner-black.png"
        document.getElementById("favicon").href = "assets/favicon/favicon-black.ico"
    }
});