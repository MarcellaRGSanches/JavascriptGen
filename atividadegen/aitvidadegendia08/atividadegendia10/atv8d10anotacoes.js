//array é um conjunto de dados, que guarda posições em forma de lista, pode ser string, numero, boolean, outro array... Array usa colchetes// as posições são chamadas de indice(index||i) 
let auxiliar, array = [2, 5, 1, 3, 4, 9, 7, 8, 10, 6], arrayPar = [], arrayImpar = [], soma = 0;
//console.log(array);
for (let contador = 0; contador < array.length; contador++) {
    soma = array[contador] + soma
    if (array[contador] % 2 == 0) {      
        arrayPar.push(array[contador]); //o push pega o array e coloca um valor
        //console.log(array[contador]);
    } else {
       arrayImpar.push(array[contador]); //o push pega o array e coloca um valor 
       //console.log(array[contador]);
    }

}

console.log(`numeros pares: ${arrayPar} \nnumeros impares: ${arrayImpar} \nA soma dos numeros é igual a: ${soma} \nA media é: ${soma/array.length}`);

//  if (array[contador] > array[contador + 1]) { // o contador vai servir de base pra pegar a posição, no caso o contador do começo tem valor 2 (que é a posição 0) 
//         auxiliar = array[contador] //a var auxiliar vai guardar o valor maior e reservar 
//         array[contador] = array[contador + 1] //o valor atual sera igual ao prox valor (q é o valor menor)
//         array[contador + 1] = auxiliar   //a posição maior vai ser igual ao valor maior 
//     }