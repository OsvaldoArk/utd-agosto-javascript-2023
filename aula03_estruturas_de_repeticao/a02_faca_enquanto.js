//na primeira execução o do while executa mesmo que a condição seja falsa.
contador = 0;
do{

    contador++;
    console.log(contador);
    if(contador === 50)
        break;
}while(false);
