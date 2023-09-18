/*
Intermediário 20 –  Faça um programa que receba dez idades, pesos e Alturas e que calcule e mostre:

A média das idades das dez pessoas;
A quantidade de pessoas com peso superior a 90 quilos e altura inferior a 1,50;
A porcentagem de pessoas com idade entre 10 e 30 anos entre as pessoas que medem mais de 1,90; */

var pessoas = [
    {idade:21,peso:95,altura:1.48},
    {idade:28,peso:94,altura:1.45},
    {idade:29,peso:85,altura:1.95},
    {idade:34,peso:105,altura:1.85},
    {idade:21,peso:95,altura:1.91},
]
var superiorNoventa = 0, mediaIdade = 0,altas=0;

for(var indice = 0; indice<pessoas.length;indice++){

    mediaIdade+= pessoas[indice].idade;

    if(pessoas[indice].idade > 10 && pessoas[indice].idade <30 && pessoas[indice].altura> 1.9){
        altas++;
    }

    if(pessoas[indice].peso>90 && pessoas[indice].altura < 1.5){
        superiorNoventa++;
    }
}

mediaIdade = mediaIdade / pessoas.length
var porcentagem = altas * 100 / pessoas.length;
console.log("Média de pessoas: "+mediaIdade);
console.log("Pessoas acima de 90kg e com menos de 1.50m: "+superiorNoventa);
console.log("Porcentagem de Pessoas com mais de 1.90: "+porcentagem+"%");