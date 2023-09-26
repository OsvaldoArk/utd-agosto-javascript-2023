//let resolve problema de escopo e hoisting
//const cria variáveis que não podem, diretamente, serem modificadas.
//arrow functions têm o seu próprio contexto.

const soma = function (n01,n02){
    return n01 + n02;
}

const somaFlecha = (n01,n02)=> n01 + n02;

const exp = function (n01){
    return n01**2;
}

const expFlecha = n01 => n01**2;


console.log(expFlecha(14));