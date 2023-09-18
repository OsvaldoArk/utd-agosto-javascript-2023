//construir um algoritmo que calcule o fatorial de um número.
var fatorial = function (numero){
    var contador = 1,resultado = 1;
    
    while(contador<=numero){
        resultado*=contador;
        contador++;
    }

    return resultado;
}

console.log(fatorial(6));