const leia = require('readline-sync')
 
let nome;
let opcao;

nome = leia.question("\nDigite seu nome: ");

console.log(`\nOlá ${nome}! Qual é sua faixa etária? `);
console.log("\n 1 -- De 0 a 10 anos ");
console.log("\n 2 -- De 11 a 29 anos ");
console.log("\n 3 -- De 30 a 45 anos ");
console.log("\n 4 -- De 46 a 59 anos");
console.log("\n 5 -- De 60 a 65 anos ");
console.log("\n 6 -- Acima de 65 anos ");

opcao = leia.questionInt("\nDigite o codigo da faixa etaria: ");

switch (opcao) {
    case 1: 
        console.log("\nO seu plano de saude custara R$ 100,00 por mes ");
        break;
    case 2:
        console.log("\nO seu plano de saude custara R$ 200,00 por mes ");
        break;
    case 3:
        console.log("\nO seu plano de saude custara R$ 300,00 por mes ");
        break;
    case 4:
        console.log("\nO seu plano de saude custara R$ 400,00 por mes ");
        break;
    case 5:
        console.log("\nO seu plano de saude custara R$ 500,00 por mes ");
        break;
    case 6:
        console.log("\nO seu plano de saude custara R$ 1000,00 por mes ");
        break;
    default:
        console.log("\nDigite um codigo valido");
}
   



