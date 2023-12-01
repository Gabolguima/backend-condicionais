// tipos de pagamento ("credito", "cheque", "dinheiro", "debito")
const tipoDePagamento = "credito";

const valorDoProduto = 13000; //Em centavos

let desconto = 0;

if (tipoDePagamento === "credito") {
  desconto = valorDoProduto * 95 / 100;
} else if (tipoDePagamento === "cheque") {
  desconto = valorDoProduto * 97 / 100;
} else {
  desconto = valorDoProduto * 90 / 100;
}

console.log(`Valor a ser pago: R$${(desconto / 100).toFixed(2)}`);