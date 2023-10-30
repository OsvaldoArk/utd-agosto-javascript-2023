const expoente = (exp)=> function (base){ return Math.pow(base,exp) };

const quadrado = expoente(2);

const cubo = expoente(3);

console.log(quadrado(3));

console.log(cubo(3));
