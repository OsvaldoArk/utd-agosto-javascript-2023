/*
var resultado = 0;

for(var contador = 1; contador<=100;contador++){
    resultado += contador;
}

console.log(resultado);
*/
// imprimir a soma de todos os números da sequência.
//1 + 1/2 + 1/3 + 1/4 + ... + 1/100;

var resultado = 0;

for(var contador = 1; contador<=100;contador++){
    resultado += 1/contador;
}

console.log(resultado);