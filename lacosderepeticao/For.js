const leia = require("readline-sync");

let numero, contador, cont = 0;

numero = leia.questionInt("Calcule a tabuada do:");

for (contador = 1; contador <= 10; contador++) {
    console.log(numero + " X " + contador + " = " + numero * contador);
    //console.log(numero + " / " + contador + " = " + numero/contador);

    if (numero % 2 == 0) {
        cont++
    }
}
//console.log(cont + "vezes de numeros pares")
