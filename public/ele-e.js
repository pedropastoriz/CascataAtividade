function verificarCaracteristicas() {
    const numero = parseFloat(document.getElementById('numero').value);
    let resultado = '';

    // Verificar se o número é par ou ímpar
    if (numero % 2 === 0) {
        resultado += "O número é par.\n";
    } else {
        resultado += "O número é ímpar.\n";
    }

    // Verificar se o número é positivo, negativo ou neutro
    if (numero > 0) {
        resultado += 'O número é positivo.\n';
    } else if (numero === 0) {
        resultado += 'O número é neutro.\n';
    } else {
        resultado += 'O número é negativo.\n';
    }

    // Verificar se o número é inteiro ou decimal
    if (numero % 1 === 0) {
        resultado += 'O número é inteiro.\n';
    } else {
        resultado += 'O número é decimal.\n';
    }

    document.getElementById('resultado').innerText = resultado;
}