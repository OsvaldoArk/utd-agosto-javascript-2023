const bodyparser = require('body-parser')

const express = require("express");

const app = express();

const router = require('./alunoRoutes.js');

const port = 8080;

app.use(router);
app.use(bodyparser.urlencoded({ extended: true }))
app.use(bodyparser.json())

app.listen(port,()=>{
    console.log(`servidor executando na porta: ${port}`);
});
