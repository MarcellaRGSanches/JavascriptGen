const leia = require('readline-sync')
let n1;
n1 = leia.questionFloat("Digite o primeiro numero: ");
let n2;
n2 = leia.questionFloat("Digite o segundo numero: ");
let n3;
n3 = leia.questionFloat("Digite o terceiro numero: ");
let n4;
n4 = leia.questionFloat("Digite o quarto numero: ");
let calculo = (n1*n2) - (n3*n4)
console.log("O valor do calculo é:" + calculo);