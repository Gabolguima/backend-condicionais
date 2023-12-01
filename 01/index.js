const jogada1 = "pedra";
const jogada2 = "tesoura";

if (jogada1 === jogada2) {
  console.log("Que pena, deu empate!");
} else {
  if (jogada1 === "pedra") {
    if (jogada2 === "tesoura") {
      console.log("O jogador que escolheu a pedra, ganhou!");
    } else {
      console.log("O jogador que escolheu o papel, ganhou!");
    }
  } else if (jogada1 === "tesoura") {
    if (jogada2 === "pedra") {
      console.log("O jogador que escolheu a pedra, ganhou!");
    } else {
      console.log("O jogador que escolheu a tesoura, ganhou!");
    }
  } else {
    if (jogada2 === "pedra") {
      console.log("O jogador que escolheu o papel, ganhou!");
    } else {
      console.log("O jogador que escolheu a tesoura, ganhou!");
    }
  }
}