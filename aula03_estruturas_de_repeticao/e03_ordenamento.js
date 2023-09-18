
var lista = ['d','a','c','b','e'];
for(var atual = 0; atual < lista.length;  atual++){

    for(var proximo = atual + 1; proximo < lista.length; proximo++){
        if(lista[atual] > lista[proximo]){

            var temporario  = lista[atual];

            lista[atual] = lista[proximo];
            lista[proximo] = temporario; 
        }
    }
}

console.log(lista);
