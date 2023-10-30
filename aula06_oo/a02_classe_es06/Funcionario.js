import Pessoa from "./Pessoa.js";

export class Funcionario extends Pessoa{

    funcao;

    constructor(nome,funcao){
        super(nome);
        this.funcao = funcao;
    }
}