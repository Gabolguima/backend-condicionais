const rendaMensalEmCentavos = 150000;
const mesesDecorridos = 12;
const totalJaPagoPeloAluno = 1000000;

if (mesesDecorridos > 60) {
  console.log("Você não deve mais nada!");
} else if (totalJaPagoPeloAluno >= 1800000) {
  console.log("Você já quitou todas as parcelas.");
} else if (rendaMensalEmCentavos < 200000) {
  console.log(`O valor da parcela desse mês é R$ 0 reais. Nenhum valor é devido pois a renda do estudante está abaixo do valor mínimo de R$ 2000 reais.`);
} else {
  const novaParcelaMensal = (rendaMensalEmCentavos / 100) * 18 / 100;
  console.log(`O valor da parcela desse mês é R$ ${novaParcelaMensal} reais.`);
}