document.getElementById('formulario').addEventListener('submit',async (event)=>{
    
    event.preventDefault();

    //logradouro, número, bairro,localidade e uf
    const cep = document.getElementById('cep').value;

    const listaTds = document.getElementsByTagName('td');

    const resposta = await fetch(`https://viacep.com.br/ws/${cep}/json/`);

    const dados = await resposta.json();

    //console.log(listaTds);
    
    const {logradouro,complemento,bairro,localidade, uf} = dados;

    listaTds[0].innerText = logradouro;

    listaTds[1].innerText = complemento;

    listaTds[2].innerText = bairro;

    listaTds[3].innerText = localidade;

    listaTds[4].innerText = uf;
});