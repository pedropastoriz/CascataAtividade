function calcular() {
  const n1 = parseFloat(document.getElementById('n1').value);
  const n2 = parseFloat(document.getElementById('n2').value);
  const operador = document.getElementById('operador').value;

  let resultado;

  if (operador === '+') {
      resultado = n1 + n2;
  } else if (operador === '-') {
      resultado = n1 - n2;
  } else if (operador === '*') {
      resultado = n1 * n2;
  } else if (operador === '/') {
      if (n2 === 0) {
          alert("Divisor não pode ser igual a zero.");
          return;
      } else {
          resultado = n1 / n2;
      }
  } else {
      alert('Operação inválida.');
      return;
  }

  // Arredondamento para 2 casas decimais
  resultado = Math.round(resultado * 100) / 100;

  document.getElementById('resultado').innerText = `Resultado: ${resultado}`;
}