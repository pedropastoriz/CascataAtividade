const app = document.getElementById("app");

const titulo = document.createElement("h1");
titulo.textContent = "Calculadora";

const input1 = document.createElement("input");
input1.type = "number";
input1.step = "any";
input1.placeholder = "Número 1";

const input2 = document.createElement("input");
input2.type = "number";
input2.step = "any";
input2.placeholder = "Número 2";

const select = document.createElement("select");
["+","-","*","/"].forEach(op => {
  const option = document.createElement("option");
  option.value = op;
  option.textContent = op;
  select.appendChild(option);
});

const btn = document.createElement("button");
btn.textContent = "Calcular";

const resultado = document.createElement("h2");

btn.onclick = () => {
  const n1 = parseFloat(input1.value);
  const n2 = parseFloat(input2.value);
  const op = select.value;
  let res;

  if (op === "+") res = n1 + n2;
  else if (op === "-") res = n1 - n2;
  else if (op === "*") res = n1 * n2;
  else if (op === "/") {
    if (n2 === 0) {
      resultado.textContent = "Erro: divisão por zero.";
      return;
    }
    res = n1 / n2;
  }

  // Arredondamento até duas casas decimais, seguindo .005 mantém / .006 arredonda
  res = Math.round(res * 100) / 100;
  resultado.textContent = `Resultado: ${n1} ${op} ${n2} = ${res}`;
};

app.append(titulo, input1, input2, select, btn, resultado);
