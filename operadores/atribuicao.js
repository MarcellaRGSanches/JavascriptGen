const leia = require('readline-sync') //essa const vai chamar a biblioteca que foi anteriormente instalada 

let quantidade;
let altura;

quantidade = leia.questionInt("Digite o valor do tipo inteiro: ");
console.log("O valor inteiro digitado foi: " + quantidade);

altura = leia.questionFloat("\nDigite a sua altura: " , {limitMessage: 'Digite um valor valido'});
console.log("O valor inteiro digitado foi: " + altura);

