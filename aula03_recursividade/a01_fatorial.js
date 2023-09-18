function fatorial(numero){
    if(numero===1) return 1;
    return numero * fatorial(numero-1);
}

function soma(numero){
    if(numero===0) return 0;
    return numero + soma(numero-1);
}

function fib(numero){
    if(numero<=1) return numero;
    return fib(numero-1) + fib(numero-2);
}

function fatorial02(numero){
    var resultado = 1;
    while(numero>0){
        resultado*=numero;
        numero--;
    }

    return resultado;
}

console.log(fib(10));