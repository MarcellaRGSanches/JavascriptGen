const leia = require('readline-sync')
let salarioBruto;
salarioBruto = leia.questionFloat("Qual o valor do seu salario bruto? ");
let adicionalNoturno;
adicionalNoturno = leia.questionFloat("Qual o valor do seu adicional noturno? ");
let horaExtra;
horaExtra = leia.questionFloat("Quantas horas extras voce fez? ");
let desconto;
desconto = leia.questionFloat("Qual o valor do seu desconto? ");
let salarioLiquido = salarioBruto + adicionalNoturno + (horaExtra*5) - desconto;
console.log("Seu salário liquido é: " + salarioLiquido)
