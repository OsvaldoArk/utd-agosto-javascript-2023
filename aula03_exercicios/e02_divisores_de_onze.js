/*Faça um programa que verifique e mostre os números entre 1.000 e 2.000 (inclusive) que, quando divididos por 11 produzam resto igual a 2.*/
var contador = 1000;

while(contador<=2000){
    if(contador % 11 === 2) console.log(contador);
    contador++;
}
