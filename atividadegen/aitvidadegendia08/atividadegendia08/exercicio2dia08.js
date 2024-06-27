const leia = require('readline-sync')
let nota1;
nota1 = leia.questionFloat("Digite a sua primeria nota: ");
let nota2;
nota2 = leia.questionFloat("Digite a sua segunda nota: ");
let nota3;
nota3 = leia.questionFloat("Digite a sua terceira nota: ");
let nota4;
nota4 = leia.questionFloat("Digite a sua quarta nota: ")
let media = (nota1 + nota2 + nota3 + nota4)/4
console.log("A sua média é: " + media)