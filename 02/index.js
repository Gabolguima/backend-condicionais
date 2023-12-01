const jogada1 = 5;
const jogada2 = 3;

const resultado = jogada1 + jogada2;
const resto = resultado % 2;

if (resto === 0) {
  console.log(`Você tirou o número ${resultado}, o resultado é PAR`);
} else {
  console.log(`Você tirou o número ${resultado}, o resultado é ÍMPAR`);
}