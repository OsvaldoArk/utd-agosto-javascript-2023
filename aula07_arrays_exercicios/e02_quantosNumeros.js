const crazyNumbers = [937, 5, 395, 402, 501, 333, 502, 781, 3, 691, 501, 501];

let cont = 0

crazyNumbers.forEach(numero =>{ 
                       if(numero === 501){
                            cont++;
                       }
                    });

console.log(cont);