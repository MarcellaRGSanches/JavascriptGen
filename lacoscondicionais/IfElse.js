const leia = require('readline-sync')
 
let nome;
let idade;

nome = leia.question("\nDigite seu nome: ");
idade = leia.question("\nDigite sua idade: ");

if (idade >= 0 && idade <= 10 ) {
    console.log("\nO seu plano de saude custara R$ 100,00 por mes ");
} else if (idade >= 11 && idade <= 29 ) {
    console.log("\nseu plano de saude custara R$ 350,00 por mes ");
} else {
    console.log("\nO seu plano de saude vai sair R$ 500,00 por mes ");
}