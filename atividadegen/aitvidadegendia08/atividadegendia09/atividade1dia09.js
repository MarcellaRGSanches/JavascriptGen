const leia = require('readline-sync');

let numA, numB, numC;

numA = leia.questionInt("Digite um numero para o valor A: ");
numB = leia.questionInt("Digite um numero para o valor B: ");
numC = leia.questionInt("Digite um numero para o valor C: ");

if (numA + numB > numC){
    console.log("\nO valor de A + B é maior que o valor de C");
} else if(numA + numB < numC){
    console.log("\nO valor de A + B é menor que o valor de C");
} else if(numA + numB == numC){
    console.log("\nO valor de A + B é igual o valor de C");
}









