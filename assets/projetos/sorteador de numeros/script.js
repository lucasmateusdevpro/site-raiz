
const numerosSorteados = [];

function generateNumber() {
  // Pega os valores dos inputs e converte para número
  const valueminimum = parseInt(document.getElementById("inputMinimo").value);
  const valuemaximum = parseInt(document.getElementById("inputMaximo").value);

  document.getElementById("emoticon").style.display = "none";
  document.getElementById("error").style.display = "none";

  //os numeros digitados são iguais se sim 
  if (valueminimum == valuemaximum) {
    document.getElementById("error").style.display = "inline";
    document.getElementById("error").textContent = "Os numeros digitados são igauis."
    console.log("Os numeros digitados são igauis.")
  }

  else {
    //os numeros digitados são iguais se sim 
    if (valueminimum < valuemaximum) {

      // Garante que o emoticon apareça
      document.getElementById("emoticon").style.display = "inline";

      // Gera um número aleatório entre os valores mínimo e máximo
      const numeroSortedo = Math.floor(Math.random() * (valuemaximum - valueminimum + 1)) + valueminimum;

      // Mostra o número sorteado no console e na tela      
      document.getElementById("numeroSortedo").textContent = " ' " + numeroSortedo + " ' "
      console.log(numeroSortedo);
      numerosSorteados.push(numeroSortedo);

      // Atualiza o parágrafo com todos os números sorteados
      document.getElementById("historico").textContent = "Historico: " + numerosSorteados.join(", ");
    }

    else {
      document.getElementById("error").style.display = "inline";
      document.getElementById("error").textContent = '"' + valuemaximum + '"' + " é menor que " + '"' + valueminimum + '"' + ", digite outro."
      console.log('"' + valuemaximum + '"' + " é menor que " + '"' + valueminimum + '"' + ", digite outro.")
    }
  }

}