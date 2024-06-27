const leia = require('readline-sync');
let salario;
salario = leia.questionInt("Digite o valor do seu salario: ");
let abono; 
abono = leia.questionInt("Digite o valor do seu abono: ");
let novoSalario = salario + abono;
console.log("Então o seu novo salario é:" + novoSalario);

















