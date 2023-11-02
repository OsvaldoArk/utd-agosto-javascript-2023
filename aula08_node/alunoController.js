const alunoService = require('./alunoService');

class alunoController{

    buscar(){

        return async (req,res) =>{
            const listaClientes = await alunoService.buscarAlunos();
            
            if(listaClientes !== null || listaClientes !== undefined)
                return await res.status(200).json(listaClientes);
            else 
                return res.status(404).send('recurso não encontrado');
         }
    }

    buscarPorId(){

        return async (req,res) =>{

            const { id } = req.params;

            const listaClientes = await alunoService.buscarAlunosPorId(id);
            
            if(listaClientes !== null || listaClientes !== undefined)
                return await res.status(200).json(listaClientes);
            else 
                return res.status(404).send('recurso não encontrado');
         }
    }

    adicionar(){

        return async (req,res) =>{

            const aluno = req.body;

            //console.log(aluno);

            const alunoAdicionado = await alunoService.adicionarAluno(aluno);
            
            if(alunoAdicionado !== null || alunoAdicionado !== undefined)
                return await res.status(201).json(alunoAdicionado);
            else 
                return res.status(404).send('recurso não encontrado');
         }
    }

    atualizar(){

        return async (req,res) =>{

            const { id } = req.params;

            const aluno  = req.body;

            const alunoAdicionado = await alunoService.atualizarAluno(id,aluno);
            
            if(alunoAdicionado !== null || alunoAdicionado !== undefined)
                return await res.status(200).json(alunoAdicionado);
            else 
                return res.status(404).send('recurso não encontrado');
         }
    }

    deletar(){

        return async (req,res)=>{

            const {id} = req.params;

            const aluno = await alunoService.deletarAlunoPorId(id);

            if(aluno !== null || aluno !== undefined)
                return await res.status(204).json(aluno);

            return res.status(404).send('recurso não encontrado');
        };
    }

    deletarV(){

        return async (req,res)=>{

            const {id} = req.params;

            const aluno = await alunoService.deletarAlunoPorIdVerdadeiro(id);

            if(aluno !== null || aluno !== undefined)
                return await res.status(204).json(aluno);

            return res.status(404).send('recurso não encontrado');
        };
    }
}

module.exports = new alunoController();
