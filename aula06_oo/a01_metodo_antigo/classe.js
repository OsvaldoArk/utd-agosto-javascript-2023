function Cliente(nome,telefone,endereco){
    this.nome = nome;
    this.telefone = telefone;
    this.endereco = endereco;
}

Cliente.prototype.olaMundo = function (){
    console.log('olá '+this.nome);
}

const c01 = new Cliente('Jorge','85977784477','Fátima');

console.log(c01);
c01.olaMundo();