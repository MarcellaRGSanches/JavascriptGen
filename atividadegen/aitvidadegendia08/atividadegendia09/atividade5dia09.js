const leia = require('readline-sync');

let codigo, quantidade, valorProduto;

console.log(`\nOlá, qual o seu pedido? `);
console.log("\n 1 -- Cachorro quente ");
console.log("\n 2 -- X-Salada ");
console.log("\n 3 -- X-Bacon ");
console.log("\n 4 -- Bauru ");
console.log("\n 5 -- Regrigerante ");
console.log("\n 6 -- Suco de laranja ");
codigo = leia.questionInt("\nQual o codigo do produto escolhido? ")
quantidade = leia.questionInt("\nColoque a quantidade que voce quer: ")

switch (codigo) {
    case 1:
        valorProduto = 10; 
        break;
    case 2:
        valorProduto = 15;
        break;
    case 3:
        valorProduto = 18
        break;
    case 4:
        valorProduto = 12
        break;
    case 5:
        valorProduto = 8
        break;
    case 6:
        valorProduto = 13
        break;
    default:
        console.log("\nDigite um codigo valido");
}
console.log(`\nO valor total da sua compra é R$ ${quantidade*valorProduto}`);