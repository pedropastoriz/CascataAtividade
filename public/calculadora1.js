const app = document.getElementById("app");

const titulo = document.createElement("h1");
titulo.textContent = "Calculadora";

// ... (resto do código que você colou antes)

app.append(titulo, input1, input2, select, btn, resultado);

function calcular(operador) {
  const n1 = parseFloat(document.getElementById('n1').value);
  const n2 = parseFloat(document.getElementById('n2').value);
  let resultado;

  // Verifica se os números são válidos
  if (isNaN(n1) || isNaN(n2)) {
    alert("Por favor, insira números válidos.");
    return;
}

// Identifica o operador

  switch(operador) {
    case '+': resultado = n1 + n2; break;
    case '-': resultado = n1 - n2; break;
    case '*': resultado = n1 * n2; break;
    case '/': 
        if (n2 === 0) {
        alert("Divisor não pode ser igual a zero.");
        return;
  }
    resultado = n1 / n2;
    break;
}

  // Arredondamento para 2 casas decimais
  resultado = Math.round(resultado * 100) / 100;

  document.getElementById('resultado').innerText = `Resultado: ${resultado}`;
}

app.append(titulo, input1, input2, select, btn, resultado);
