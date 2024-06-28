const leia = require("readline-sync");

let numero1, numero2, contador;

numero1 = leia.questionInt("Digite um valor inteiro: ");
numero2 = leia.questionInt("Digite o segundo valor inteiro: ");
if (numero1 < numero2) {
    for (numero1; numero1 < numero2; numero1++) {
        if (numero1 % 3 == 0 && numero1 % 5 == 0) {
            console.log(`O ${numero1} é multiplo de 3 e 5`);
        }
    }
} 
else {
    console.log("Intervalo invalido!!");
}


//Escreva um algoritmo, que leia 2 números inteiros via teclado, onde o primeiro número deve ser menor do que o segundo número(if).
//  Caso contrário(else?), deve ser exibida uma mensagem na tela informando que o intervalo é inválido e sair do programa.
// No intervalo informado, mostre na tela todos os números que são múltiplos de 3 e 5(%3==0 && %5==0???)************