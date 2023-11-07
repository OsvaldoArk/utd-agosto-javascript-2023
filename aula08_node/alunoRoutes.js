const bodyParser = require('body-parser');
const router = require('express').Router(); 
const alunoController = require('./alunoController');

let jsonParser = bodyParser.json();

router.get('/',alunoController.buscar());

router.get('/aluno/:id',alunoController.buscarPorId());

router.post('/aluno/',jsonParser,alunoController.adicionar());

router.put('/aluno/:id',jsonParser,alunoController.atualizar());

router.delete('/aluno/:id',alunoController.deletar());

router.delete('/aluno/v/:id',alunoController.deletarV());

module.exports = router;
