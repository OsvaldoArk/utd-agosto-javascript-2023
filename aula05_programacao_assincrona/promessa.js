
const numero = 3;

new Promise((resolve,reject)=>{
    
});

const promessa = new Promise((resolve,reject)=>{
    if(numero % 2===0)
        resolve('o número é par');
    else 
        reject('o número é ímpar');
});


promessa.then(resposta=>console.log(resposta))
        .catch(erro=> console.log(erro));