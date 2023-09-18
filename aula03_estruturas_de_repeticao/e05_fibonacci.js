//1,1,2,3,5,8,13,21,34,55...

var a = 1 , b = 0 , c = 0, contador = 1;

while(contador <= 10){

    c = a + b;
    a = b;
    b = c;

    console.log(c);
    contador++;
}
