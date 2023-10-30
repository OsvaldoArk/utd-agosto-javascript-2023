const numeros = [1,2,3,4,5];

const impares = numeros.filter(x => x % 2 !== 0);

const pares = numeros.filter(num => num % 2 === 0);

//const impares = numeros.filter(function (x){ return x % 2 != 0});
//const impares = numeros.filter((x) => { return x % 2 != 0});

console.log(numeros);

console.log(pares);

console.log(impares);
