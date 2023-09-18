/*01 – Crie um algoritmo que receba 2 valores: altura e sexo (Masculino ou Feminino). Em seguida, calcule o peso ideal com base nesses fatores. As fórmulas utilizadas são (72.7*h)-58 para homens e (62.1*h)-44.7 para mulheres.*/

var altura = 1.63, sexo = 'mamifero', pesoIdeal = 0;

if(sexo === 'f')    
    pesoIdeal = 62.1 * altura - 44.7;
else if(sexo === 'm')    
    pesoIdeal = 72.7 * altura - 58;
else
    pesoIdeal = 'esse sexo não existe';

console.log(pesoIdeal);


