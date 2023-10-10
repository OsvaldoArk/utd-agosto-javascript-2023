const titulo = document.getElementById('titulo');
const subtitulos = document.getElementsByTagName('h2');
const paragrafos = document.getElementsByClassName('paragrafo');

const ti = document.querySelector(`h1`);

subtitulos[0].style = 'color:navy';

paragrafos[0].innerHTML+= '<strong>NOVO TEXTO</strong>'

paragrafos[2].innerHTML = `<table border='1'>
                            <thead>
                                <tr>
                                    <th colspan='3'>Ficha técnica</th>
                                </tr>
                                <tr>
                                    <th>nome</th>
                                    <th>idade</th>
                                    <th>linguagem</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Osvaldo</td>
                                    <td>36</td>
                                    <td>JAVA</td>
                                </tr>
                            </tbody>
                           </table>`;

const botao = document.getElementById('botao');

botao.innerText = 'clique aqui';

const lista = document.querySelector('#lista');

const item = document.createElement('li');

item.innerText = 'top gear';

lista.firstElementChild.innerText = 'top gear';

console.log(lista.children[1].innerText);