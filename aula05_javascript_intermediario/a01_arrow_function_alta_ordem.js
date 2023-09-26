var a = function (numero){
    return function (multiplicador){
        return numero * multiplicador;
    }
}

//numero => multiplicador => numero * multiplicador;

const multi = numero => 
                multiplicador => 
                    numero * multiplicador;

const dobro = multi(2);
const triplo = multi(3);

console.log(dobro(7));
console.log(triplo(7));