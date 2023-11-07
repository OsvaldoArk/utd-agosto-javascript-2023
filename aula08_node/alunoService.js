const conexao = require('./db');

class alunoService{

    buscarAlunos(){
        const sql = 'SELECT * FROM alunos WHERE deletedAt IS NULL';
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
        const sql = 'select * from alunos where id = ? and deletedAt IS NULL';
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

        const {nome,telefone,email} = aluno;

        return new Promise((resolve,reject)=>{
            conexao.query(sql,[nome,telefone,email],(erro,resposta)=>{
                if(!erro)
                    resolve(resposta);
                else
                    reject(erro);
            });
        });
    }

    atualizarAluno(id,aluno){
        const sql = 'update alunos set nome=?, telefone=?, email=? where id = ?';

        const {nome,telefone,email} = aluno;

        return new Promise((resolve,reject)=>{
            conexao.query(sql,[nome,telefone,email,id],(erro,resposta)=>{
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

    deletarAlunoPorIdVerdadeiro(id){
        const sql = 'update alunos set deletedAt = ? where id = ?';

        const date = new Date();

        return new Promise((resolve,reject)=>{
            conexao.query(sql,[date,id],(erro,resposta)=>{
                if(!erro)
                    resolve(resposta);
                else
                    reject(erro);
            });
        });
    }
}

module.exports = new alunoService();
