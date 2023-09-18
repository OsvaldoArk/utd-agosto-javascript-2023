var a = function (numero){
    return function (multiplicador){
        return numero * multiplicador;
    }
}

var quatroVezes = a(4);
/*
quatroVezes = function (multiplicador){
    return 4 * multiplicador;
}
*/
var seisVezes = a(6);
/*
seisVezes = function (multiplicador){
    return 6 * multiplicador;
}
*/
console.log(quatroVezes(4));
console.log(seisVezes(4));
console.log(a(10)(4));
console.log(b(15)(4));