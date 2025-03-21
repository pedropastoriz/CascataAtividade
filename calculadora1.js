// Calculadora em JavaScript, tarefa proposta pelo professor Luiz Garcia Zanin
// input de 2 números

let n1 = parseFloat(prompt('Digite o primeiro número: '));
let n2 = parseFloat(prompt('Digite o segundo número: '));

// Definição da operação
let operador = prompt('Digite a operação entre os dois números(+, -, * ou /): ');

let resultado;

// Estrutura condicional para executar o programa
if (operador === '+') {
  resultado = n1 + n2;
} else if (operador === '-') {
  resultado = n1 - n2;
} else if (operador === '*') {
  resultado = n1 * n2;
} else if (operador === '/') {
  if (n2 === 0) {
    alert("Divisor não pode ser igual a zero.");
  } else {
    resultado = n1 / n2;
  }
} else {
  alert('Operação inválida.');
}

// Apresentar resultado ao usuário
if (resultado !== undefined) {
  alert(`O resultado de ${n1} ${operador} ${n2} é ${resultado}.`);
}
