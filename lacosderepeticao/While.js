const leia = require("readline-sync");

let continua = true;
let numero1, numero2, resultado;

// console.log("\n+++++++++++++Menu+++++++++++++++");
// continua = leia.keyInYNStrict("Deseja usar nossa calculadora de soma? ");
// console.log("++++++++++++++++++++++");

while (continua) {
    numero1 = leia.questionInt("\nDigite o primeiro valor: ");
    numero2 = leia.questionInt("\nDigite o segundo valor: ");

    resultado = numero1 + numero2;
    console.log("\nO resultado da soma é: " + resultado);

    console.log("\n+++++++++++++Menu+++++++++++++++");
    continua = leia.keyInYNStrict("Deseja continuar? ");
    console.log("++++++++++++++++++++++");
}