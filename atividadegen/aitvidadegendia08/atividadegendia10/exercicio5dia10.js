const leia = require("readline-sync");

let numero, somaTotal = 0;

do {
    numero = leia.questionInt("insira um numero: ");
    if (numero > 0) {
        somaTotal = numero + somaTotal;
    }
}
while (numero !== 0);
console.log(`A soma dos numeros positivos é ${somaTotal}`);
//numero > 0 tem que somar
//while tem a condição de que se for == 0 o código tem que parar 