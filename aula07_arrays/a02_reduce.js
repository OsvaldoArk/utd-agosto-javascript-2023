const numeros = [1,2,3,4,5];

const soma = numeros.reduce((numero,soma)=> soma+=numero ,0);

//const soma = numeros.reduce(function (numero,soma){return soma+=numero},0);
//const soma = numeros.reduce((numero,soma)=>{return soma+=numero},0);

console.log(soma);

console.log(numeros);