const leia = require('readline-sync');

let nome, codigo, salario, cargo, salarioReajustado;

nome = leia.question("Qual seu nome?")
console.log(`\nOla ${nome}, qual o seu cargo atual?`)
console.log("\n 1 -- Gerente ");
console.log("\n 2 -- Vendedor ");
console.log("\n 3 -- Supervisor ");
console.log("\n 4 -- Motorista ");
console.log("\n 5 -- Estoquista ");
console.log("\n 6 -- Técnico de TI ");
codigo = leia.questionInt("\nInsira o codigo do seu cargo atual: ");
salario = leia.questionFloat("\nPor favor, insira seu salario: ");
switch (codigo) {
    case 1:
        cargo = "Gerente";
        salarioReajustado = salario + (salario * 0.1);
        break;
    case 2:
        cargo = "Vendedor";
        salarioReajustado = salario + (salario * 0.07);
        break;
    case 3:
        cargo = "Supervisor";
        salarioReajustado = salario + (salario * 0.09);
        break;
    case 4:
        cargo = "Motorista";
        salarioReajustado = salario + (salario * 0.06);
        break;
    case 5:
        cargo = "Estoquista";
        salarioReajustado = salario + (salario * 0.05);
        break;
    case 6:
        cargo = "Técnico de TI";
        salarioReajustado = salario + (salario * 0.08);
        break;
    default:
        console.log("Insira um codigo valido");
        break;
}
console.log(`\nNome do colaborador: ${nome} \nCargo: ${cargo} \nO seu novo salario vai ser de R$ ${salarioReajustado} `);
