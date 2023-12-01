const nota = 8.5;

if (nota <= 10 && nota >= 9) {
  console.log("O estudante obteve conceito A");
} else if (nota <= 8.9 && nota >= 8) {
  console.log("O estudante obteve conceito B");
} else if (nota <= 7.9 && nota >= 6) {
  console.log("O estudante obteve conceito C");
} else if (nota <= 5.9 && nota >= 4) {
  console.log("O estudante obteve conceito D");
} else {
  console.log("O estudante obteve conceito E");
}