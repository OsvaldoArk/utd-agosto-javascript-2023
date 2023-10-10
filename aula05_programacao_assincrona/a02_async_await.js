const retornaProduto = async ()=>{
    const resposta = await fetch('https://fakestoreapi.com/products/2');

    const dados = await resposta.json();

    console.log(dados);
}

retornaProduto();