let obj = {
    nome:'jorge',
    telefone:'89985988899',
    endereco:'bairro de fátima',
}

const {nome,...obs} = obj;

obj.endereco = 'praia do futuro';

const atributo = 'endereco';
const valor = 'aguanhambi';

obj = {...obj,[atributo]:valor};

console.log(obj);