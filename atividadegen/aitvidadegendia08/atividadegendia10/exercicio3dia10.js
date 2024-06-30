const leia = require("readline-sync");

let idade = 0, idadeMaiorCinquenta = 0, idadeMenorVinteUm = 0;

while (idade >= 0) {
    idade = leia.questionInt("\nColoque uma idade: ");
    // console.log(idade)
    if (idade > 50) {
        idadeMaiorCinquenta++;
        // console.log("idade maior que 50");
        console.log("idade maior que 50 total " + idadeMaiorCinquenta);

    } else if (idade >= 0 && idade < 21) {
        idadeMenorVinteUm = idadeMenorVinteUm + 1;
        // console.log("idade menor que 21");
        console.log("idade menor que 21 total " + idadeMenorVinteUm);
    }
}
console.log(`Total de pessoas menores de 21 anos: ${idadeMenorVinteUm}`);
console.log(`Total de pessoas maiores de 50 anos: ${idadeMaiorCinquenta}`);