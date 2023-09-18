/*Intermediário 7- Uma loja tem tem uma política de descontos de acordo com o valor da compra do cliente. Os descontos começam acima dos R$500. A cada 100 reais acima dos R$500,00 o cliente ganha 1% de desconto cumulativo até 25%. 

 Por exemplo: R$500 = 1% || R$600,00 = 2% … etc…

 Faça um programa que exiba essa tabela de descontos no seguinte formato:  

 Valordacompra – porcentagem de desconto – valor final*/

var valorCompra = 0;
 
while(valorCompra<=3000){
    var desconto = Math.trunc((valorCompra - 500) / 100);
    
    if(desconto>=0){

        var valorFinal = valorCompra - valorCompra*desconto/100;
    
        console.log("R$ "+valorCompra+" "+desconto+"% R$"+valorFinal);
    }
    valorCompra+=100;
}