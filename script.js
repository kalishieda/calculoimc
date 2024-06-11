// Variáveis
var nome, alturaCM, peso, alturaM, m, classificacao;

// Declarações
nome = prompt("Digite o seu nome aqui por favor: ");
alturaCM = parseFloat(prompt("Por favor informe sua altura em centímetros: "));
peso = parseFloat(prompt("Por favor informe seu peso em quilogramas: "));

// Expressões Algébricas 
alturaM = alturaCM / 100;
m = peso / (alturaM * alturaM);

// Estruturas de verificação
if (m < 16) {
    classificacao = "Baixo peso muito grave"; // Bloco de código
} else if (m >= 16 && m <= 16.99) {
    classificacao = "Baixo peso grave"; // Bloco de código
} else if (m >= 17 && m <= 18.49) {
    classificacao = "Baixo peso"; // Bloco de código
} else if (m >= 18.50 && m <= 24.99) {
    classificacao = "Peso normal"; // Bloco de código
} else if (m >= 25 && m <= 29.99) {
    classificacao = "Sobrepeso"; // Bloco de código
} else if (m >= 30 && m <= 34.99) {
    classificacao = "Obesidade grau I"; // Bloco de código
} else if (m >= 35 && m <= 39.99) {
    classificacao = "Obesidade grau II"; // Bloco de código
} else if (m > 40) {
    classificacao = "Obesidade grau III"; // Bloco de código
}

// Retorno para o usuário
document.write(nome, "  possui índice de massa corporal igual a ", m.toFixed(2), " sendo classificado como: ", classificacao);