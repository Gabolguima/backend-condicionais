const diaDaSemana = 10;

const semana = {
  1: "Segunda Feira",
  2: "Terça Feira",
  3: "Quarta Feira",
  4: "Quinta Feira",
  5: "Sexta Feira",
  6: "Sábado",
  7: "Domingo"
};

if (diaDaSemana === 1) {
  console.log("Segunda-Feira");
} else if (diaDaSemana === 2) {
  console.log("Terça-Feira");
} else if (diaDaSemana === 3) {
  console.log("Quarta-Feira");
} else if (diaDaSemana === 4) {
  console.log("Quinta-Feira");
} else if (diaDaSemana === 5) {
  console.log("Sexta-Feira");
} else if (diaDaSemana === 6) {
  console.log("Sábado");
} else if (diaDaSemana === 7) {
  console.log("Domingo");
} else {
  console.log("O dia da semana informado não é válido.");
}

//console.log(semana[diaDaSemana]);
