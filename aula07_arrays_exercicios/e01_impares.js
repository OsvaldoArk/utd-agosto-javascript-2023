const array = [];

for(let x = 0; x<20;x++){

    const numero = Math.round((Math.random()*100)+1);

    array.push(numero);
}

const impares =  new Set(array.filter(numero => numero % 2 !== 0));

console.log(array);

console.log(impares);

