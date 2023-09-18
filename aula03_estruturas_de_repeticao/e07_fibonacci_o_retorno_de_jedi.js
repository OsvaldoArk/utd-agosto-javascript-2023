
var a = 1 , b = 0 , c = 0, numero = 3, pertence = false;

while(c <= numero){

    c = a + b;
    a = b;
    b = c;

    if(c === numero) pertence = true;
}

var resposta = pertence ?  "o número pertence ao fibonnacci" : "o número não pertence ao fibonnacci";

console.log(resposta);