const quantidadeDeAguaIngerida = 2;

const riscoAlto = 1.4;
const riscoBaixo = 3;

if (quantidadeDeAguaIngerida <= riscoAlto) { // ALTO
  console.log("Risco Alto - Você está ingerindo pouquissima água, beba mais água!");
} else if (quantidadeDeAguaIngerida > riscoAlto && quantidadeDeAguaIngerida <= riscoBaixo) { // MODERADO
  console.log("Risco Moderado - Você está ingerindo pouca água, beba mais!");
} else if (quantidadeDeAguaIngerida > riscoBaixo) { // BAIXO
  console.log("Risco Baixo - Você está ingerindo uma boa quantidade de água, parabéns!");
}