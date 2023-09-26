document.getElementById('adicionar').addEventListener('mouseout', () =>{
   const input = document.getElementById('nome').value;
   
   const lista = document.getElementById('lista');
   
   const item = document.createElement('li');
   
   item.innerText = input;
   
   lista.appendChild(item);
   
});



/*
const titulo = document.getElementsByTagName('h1');

titulo[0].innerText+=' do velozes e furiosos'

titulo[0].style = 'color:purple;text-align:center;margin-top:250px';

console.log(titulo[0].innerText);
*/