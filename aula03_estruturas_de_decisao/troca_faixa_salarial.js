/*
07 – Uma empresa precisa de um programa em que seus funcionários possam consultar seu último aumento. O algoritmo deve receber a categoria do funcionário e seu salário atual e retornar o novo salário. Os aumentos foram de 10% para a categoria A, 12% para a categoria B e 15% para a categoria C.
*/

var categoria='c', aumento= '';

switch(categoria){
    case 'a' :  aumento = '10';
                console.log('o aumento de salário da categoria '+categoria+' foi igual a '+aumento+'%');
                break;
    
    case 'b' :  aumento = '12';
                console.log('o aumento de salário da categoria '+categoria+' foi igual a '+aumento+'%');
                break;    

    case 'c' :  aumento = '15';
                console.log('o aumento de salário da categoria '+categoria+' foi igual a '+aumento+'%');
                break;

    default:    console.log('categoria inválida. Tente novamente!');
}