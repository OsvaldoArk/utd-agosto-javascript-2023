function soma(numero){
    if(numero===0) return 0;
    return numero + soma(numero-1);
}

function somaTernario(numero){
    return numero===0 ? 0 : numero + soma(numero-1);
}

const somaFlecha = numero => numero === 0? 0 : numero + somaFlecha(numero-1);

console.log(somaFlecha(10));