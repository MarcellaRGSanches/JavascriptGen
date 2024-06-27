const leia = require('readline-sync');

let numero;

numero = leia.questionInt("Digite um numero: ");
 
if(numero >= 0 && numero%2 == 1){
    console.log(`\nO ${numero} é impar e positivo`);
}
 else if (numero >= 0 && numero%2 == 0){
    console.log(`\nO ${numero} é par e positivo`);
}
else if(numero < 0 && numero%2 == 0){
    console.log(`\nO ${numero} é par e negativo`);
}
else if(numero < 0 && numero%2 == -1){
    console.log(`\nO ${numero} é impar e negativo`);
} 


