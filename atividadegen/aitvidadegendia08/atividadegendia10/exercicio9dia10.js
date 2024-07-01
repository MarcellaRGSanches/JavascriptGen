let matrizInteiros = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
let principal = [], secundario = [], somaPrincipal = 0, somaSecundaria = 0;
console.table(matrizInteiros);


for (let j = 0; j < 3; j++) {
    principal.push(matrizInteiros[j][j]);
    secundario.push(matrizInteiros[j][2 - j]);
}

for (let i = 0; i < 3; i++) {
    somaPrincipal = principal[i] + somaPrincipal; //no caso += faria a mesma coisa, iria somar o valor atual com o valor antigo que foi passado para ela 
    somaSecundaria = secundario[i] + somaSecundaria;
}

console.log("Elementos da Diagonal Principal: \n" + principal);
console.log("Elementos da Diagonal Secundaria: \n" + secundario);
console.log("Soma dos Elementos da Diagonal Principal: \n" + somaPrincipal);
console.log("Soma dos Elementos da Diagonal Secundaria: \n" + somaSecundaria);