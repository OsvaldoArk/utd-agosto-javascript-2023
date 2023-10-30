const alunos = [
    {id:4, nome:'Lívia',idade:24},
    {id:2, nome:'Jonas',idade:21},
    {id:1, nome:'Miriam',idade:30},
    {id:3, nome:'Joab',idade:32},
]


function compare(a,b){
    if(a.nome<b.nome) return -1;
    if(a.nome>b.nome) return 1;
    return 0;
}

//alunos.sort((obj01,obj02)=> obj02.idade - obj01.idade);

alunos.sort(compare);

console.log(alunos);