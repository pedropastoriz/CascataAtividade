// Entrada de 2 números
let n1 = parseFloat(prompt('Digite o número: '));

// Função para verificar as características de um número
function verificarCaracteristicas(numero) {
    // Verificar se o número é par ou ímpar
    if (numero % 2 === 0) {
        alert("O número é par.");
    } else {
        alert("O número é ímpar.");
    }

    // Verificar se o número é positivo, negativo ou neutro
    if (numero > 0) {
        alert('O número é positivo.');
    } else if (numero === 0) {
        alert('O número é neutro.');
    } else {
        alert('O número é negativo.');
    }

    // Verificar se o número é inteiro ou decimal
    if (numero % 1 === 0) {
        alert('O número é inteiro.');
    } else {
        alert('O número é decimal.');
    }
}

// Verificar as características dos dois números
verificarCaracteristicas(n1);
verificarCaracteristicas(n2);
