import Pessoa from "./Pessoa.js";
import { Funcionario } from "./Funcionario.js";

const pessoa = new Pessoa('Bruna');

const funcionario = new Funcionario('Marcos','estagiário');

//const funcionario = new Funcionario('desenvolvedor');
/*
pessoa.nome = 'Jéssica';

console.log(pessoa.nome);

pessoa.mostraNome();

Pessoa.monstraPessoa();
*/
//console.log(funcionario);

funcionario.mostraNome();

Funcionario.monstraPessoa();