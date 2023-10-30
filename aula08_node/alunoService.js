const conexao = require('./db');

class alunoService{

    buscarAlunos(){
        const sql = 'SELECT * FROM alunos';
        return new Promise((resolve,reject)=>{
            conexao.query(sql,[],(erro,resposta)=>{
                if(!erro)
                    resolve(resposta);
                else
                    reject(erro);
            });
        });
    }

    buscarAlunosPorId(id){
        const sql = 'select * from alunos where id = ?';
        return new Promise((resolve,reject)=>{
            conexao.query(sql,[id],(erro,resposta)=>{
                if(!erro)
                    resolve(resposta);
                else
                    reject(erro);
            });
        });
    }

    adicionarAluno(aluno){
        const sql = 'insert into alunos(nome,telefone,email) values(?,?,?)';
        return new Promise((resolve,reject)=>{
            conexao.query(sql,[aluno.nome,aluno.telefone,aluno.email],(erro,resposta)=>{
                if(!erro)
                    resolve(resposta);
                else
                    reject(erro);

            });
        });
    }

    deletarAlunoPorId(id){
        const sql = 'delete from alunos where id = ?';
        return new Promise((resolve,reject)=>{
            conexao.query(sql,[id],(erro,resposta)=>{
                if(!erro)
                    resolve(resposta);
                else
                    reject(erro);
            });
        });
    }
}

module.exports = new alunoService();
