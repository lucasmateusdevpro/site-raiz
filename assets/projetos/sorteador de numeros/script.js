
const numerosSorteados = [];

function generateNumber() {
  // Pega os valores dos inputs e converte para número
  const valueminimum = parseInt(document.getElementById("inputMinimo").value);
  const valuemaximum = parseInt(document.getElementById("inputMaximo").value);

  // Garante que o emoticon apareça
  document.getElementById("emoticon").style.display = "inline";

  // Gera um número aleatório entre os valores mínimo e máximo
  const numeroSortedo = Math.floor(Math.random() * (valuemaximum - valueminimum + 1)) + valueminimum;

  // Mostra o número sorteado no console e na tela
  console.log(numeroSortedo);
  document.getElementById("numeroSortedo").textContent = numeroSortedo;

  numerosSorteados.push(numeroSortedo);

  // Atualiza o parágrafo com todos os números sorteados
  document.getElementById("historico").textContent = "Números sorteados: " + numerosSorteados.join(", ");
}

