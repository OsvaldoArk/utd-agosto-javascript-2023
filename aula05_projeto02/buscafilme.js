document.getElementById('formulario').addEventListener('submit',async (evento)=>{
    evento.preventDefault();

    const filme = evento.target[0].value;

    const resposta = await fetch(`http://omdbapi.com/?apikey=${suachaveaqui}t=${filme}`);
    
    const dados = await resposta.json();
    
    const {Title,Year,Genre,Runtime,Plot,Metascore, Poster} = dados;
    
    const info = document.getElementsByTagName('td');

    info[1].innerText = Title;
    info[2].innerHTML = `<img class='posterFilme' src=${Poster} />`;
    info[4].innerText = Year;
    info[6].innerText = Genre;
    info[8].innerText = Runtime;
    info[10].innerText = Plot;
    info[12].innerText = Metascore;

    //console.log(dados);
});