const express = require('express');

const app = express();

const db = require('./config/db.config.js');

const Cliente = db.Cliente;

var bodyParser = require('body-parser'); 

let router = require('./routes/routes.js');

const cors = require('cors')
const corsOptions = {
  origin: 'http://localhost:3000',
  optionsSuccessStatus: 200
}

app.use(cors(corsOptions));

app.use(bodyParser.json());
app.use(express.static('resources'));
app.use('/', router);

const server = app.listen(8080, function () {
 
  let host = server.address().address
  let port = server.address().port
 
  console.log("App está rodando no endereço http://%s:%s", host, port); 
});

db.sequelize.sync({force: true}).then(() => {
  console.log('Apaga e recria a tabela usando { force: true }');
  Cliente.sync().then(() => {
    const clientes = [
      { nome: 'Pedro', idade: 23, email: 'pedro@email.com' },
      { nome: 'Sara' , idade: 31 ,  email: 'sara@email.com'},
      { nome: 'Emilly', idade: 18 ,  email: 'emilly@email.com'},
    ]
    
    clientes.map(cliente =>{

    Cliente.create(cliente);
    });
  })
});