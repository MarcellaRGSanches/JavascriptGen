let auxiliar, array = [2, 5, 1, 3, 4, 9, 7, 8, 10, 6], arrayPar = [], arrayImpar = [], soma = 0;
for (let contador = 0; contador < array.length; contador++) {
    soma = array[contador] + soma
    if (array[contador] % 2 == 0) {
        arrayPar.push(array[contador]);
    } else {
        arrayImpar.push(array[contador]);

    }
}
console.log(`numeros pares: ${arrayPar} \nnumeros impares: ${arrayImpar} \nA soma dos numeros é igual a: ${soma} \nA media é: ${soma / array.length}`);