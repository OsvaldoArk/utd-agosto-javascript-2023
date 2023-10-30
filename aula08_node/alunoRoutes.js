const bodyParser = require('body-parser');
const router = require('express').Router(); 
const alunoController = require('./alunoController');

let jsonParser = bodyParser.json();

router.get('/',alunoController.buscar());

router.get('/aluno/:id',alunoController.buscarPorId());

router.post('/aluno/',jsonParser,alunoController.adicionar());

router.delete('/aluno/:id',alunoController.deletar());

module.exports = router;
