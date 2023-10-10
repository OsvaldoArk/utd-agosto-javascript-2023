const botao = document.getElementById('enviar').addEventListener('click', (evento)=>{
    evento.preventDefault();
    
    const nome = document.getElementById('nome');
    
    const titulo = document.getElementById('titulo');

    titulo.innerText = nome.value;

    nome.value = '';

    //console.log(nome.value);
});
