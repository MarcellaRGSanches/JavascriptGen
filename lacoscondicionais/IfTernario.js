const leia = require("readline-sync");

let nota1, nota2, media;

nota1 = leia.questionFloat("Digite a primeira nota: ");
nota2 = leia.questionFloat("Digite sua segunda nota: ");

media = (nota1 + nota2)/2;

console.log((media >= 6) ? "Aprovado!" : "Reprovado!"); //a interrrogação vai fazer o papel do if/else nesse caso, e os dois pontos vai fazer a separação das respostas 

