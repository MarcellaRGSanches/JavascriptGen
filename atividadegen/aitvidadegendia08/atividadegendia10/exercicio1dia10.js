const leia = require("readline-sync");

let numero1, numero2;

numero1 = leia.questionInt("Digite um valor inteiro: ");
numero2 = leia.questionInt("Digite o segundo valor inteiro: ");
if (numero1 < numero2) {
    for (numero1; numero1 < numero2; numero1++) {
        if (numero1 % 3 == 0 && numero1 % 5 == 0) {
            console.log(`O ${numero1} é multiplo de 3 e 5`);
        } else {
            console.log("Esse intervalo de números nao sao multiplos de 3 e 5!");
        }
    }
}
else {
    console.log("Intervalo invalido!!");
}
