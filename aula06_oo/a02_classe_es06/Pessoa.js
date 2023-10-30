export default class Pessoa{

    #nome;

    constructor(nome){
        this.#nome = nome;
    }

    get nome(){
        return this.#nome;
    }

    set nome(nome){
        this.#nome = nome;
    }

    mostraNome(){
        console.log("nome: "+this.#nome);
    }

    static monstraPessoa(){
        console.log("Pessoa: nome");
    }
}