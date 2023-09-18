
var numero = 27, divisor = 1, numeroDeDivisores = 0;

while(divisor <= numero){

    if(numero % divisor === 0) 
        numeroDeDivisores++;

    divisor++;    
}

var resposta = (numeroDeDivisores === 2) ? "é primo" : "não é primo";
/*
if(numeroDeDivisores === 2)
    resposta = "é primo";
else
    resposta = "não é primo";
*/

console.log(resposta);