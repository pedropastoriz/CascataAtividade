function verificarCaracteristicas() {
    const numero = parseFloat(document.getElementById('numero').value);
    const resposta = document.getElementById('resultado');
    let resultado = ''; // Inicializa como string vazia

    // Se o input estiver vazio ou não for um número, reseta o resultado
    if (isNaN(numero)) {
        resposta.innerText = '';  
        return;
    }

    // Verificar se o número é par ou ímpar
    resultado += (numero % 2 === 0) ? "par, " : "ímpar, ";

    // Verificar se o número é positivo, negativo ou neutro
    resultado += (numero > 0) ? "positivo e " : (numero === 0) ? "neutro e " : "negativo e ";

    // Verificar se o número é inteiro ou decimal
    resultado += (numero % 1 === 0) ? "inteiro." : "decimal.";

    resposta.innerText = resultado; // Atualiza o resultado na tela
}