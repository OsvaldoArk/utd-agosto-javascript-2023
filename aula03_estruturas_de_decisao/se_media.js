/* 
04 – Construa um algoritmo que receba 5 notas de um aluno e calcule a média das 5. Em seguida, o programa retorna a situação do aluno com base no sistema: Notar inferior a 4 = reprovado, nota superior a 4 e inferior a 7 = recuperação, nota superior a 7 = aprovação.
*/
            //0,1,2,3,4
var notas = [8,7,5,6,1]; // nota01, nota02, nota03, nota04, nota05

var media = (notas[0] + notas[1] + notas[2] + notas[3] + notas[4]) / 5;

if(media >= 0 && media < 4){
    console.log('reprovado: '+media);
}else if(media >=4 && media < 7){
    console.log('recuperação: '+media);
}else if(media >=7 && media <= 10){
    console.log('aprovado: '+media);
}else{
    console.log('média inválida:'+media);
}