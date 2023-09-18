//100, 50, 20, 10, 5, 2, 1, 
//centavos 50, 25, 10, 5, 1.

var dinheiro = 200, preco = 121.8, troco = dinheiro - preco;

var cem = 0, cinquenta = 0, vinte = 0, dez = 0, cinco = 0, dois = 0, um = 0;
var cinquentaC = 0, vinteECinco = 0, dezC = 0, cincoC = 0, umC = 0;
while(troco >= 0){
    console.log('processando...')
    if(troco > 100){
        troco-=100;
        cem++;
    }else if(troco > 50){
        troco-=50;
        cinquenta++;
    }else if(troco > 20){
        troco-=20;
        vinte++;
    }else if(troco > 10){
        troco-=10;
        dez++;
    }else if(troco > 5){
        troco-=5;
        cinco++;
    }else if(troco > 2){
        troco-=2;
        dois++;
    }else if(troco>1){
        troco-=1;
        um++;
    }else if(troco > 0.50){
        troco-=0.50;
        cinquentaC++;
    }else if(troco > 0.25){
        troco-=0.25;
        vinteECinco++;
    }else if(troco > 0.1){
        troco-=0.1;
        dezC++;
    }else if(troco > 0.05){
        troco-=0.05;
        cincoC++;
    }else if(troco>0.01){
        troco-=0.01;
        umC++;
    }
}


console.log("100: "+cem+", 50: "+cinquenta+", 20: "+vinte+", 10: "+dez+", 5: "+cinco+", 2: "+dois+", 1: "+um);
console.log("\ncentavos\n");
console.log("50 c: "+cinquentaC+", 25 c: "+vinteECinco+", 10 c: "+dezC+", 5 c: "+cincoC+", 1 c: "+umC);
