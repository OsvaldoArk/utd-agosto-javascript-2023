const cart = [
    { name: 'Dark Souls III', price: 95.03 },
    { name: 'Shadow of the Tomb Raider', price: 101.19 },
    { name: 'Sekiro: Shadows Die Twice', price: 179.99 },
    { name: 'Resident Evil 2', price: 119.90 },
    { name: 'Death Stranding', price: 149.99 }
]

//const lista = cart.map(({name})=>name).reduce((query,nome)=> query+="- "+nome+"\n","");

const lista = cart.reduce((query,{name})=> query+="- "+name+"\n","");

console.log(lista);