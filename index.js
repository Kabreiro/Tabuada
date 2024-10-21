//instalar modulo que oferece recursos
//npm install express

//importar modulo pra ser utilizado
//const express = require('express'); commonJS
//usaremos o padrão modular para importar os módulos
//NAO esquecer de atualizar o package.json adicionando a chave "type" com valor modulo
import express from "express";
//console.log("programa exec");

const app=express();
const host="0.0.0.0";
const porta=3000;


app.get('/', (require,resposta)=>{
    resposta.send('<h1>Página principal</h1>');
    resposta.end();
});

//disponibilizar a tabuada do 7 no endpoint /tabuada7

app.get('/tabuada7', (require,resposta)=>{
    var i;
    var resp="";
    for(i=0;i<=10;i++){
        resp += `<p> 7 x ${i} = ${7*i}</p>`;
    }
    resposta.send(`${resp}`);
    resposta.end();
});

app.get('/tabuada', (require,resposta)=>{
    const numero = require.query.numero;
    const ate = require.query.ate;
    var i;
    var resp="";
    for(i=0;i<=ate;i++){
        resp += `<p> ${numero} x ${i} = ${numero*i}</p>`;
    }
    resposta.send(`${resp}`);
    resposta.end();
});

app.get('/dinheiro', (require,resposta)=>{
    resposta.send('<p>Toma aqui seus 500 conto</p>');
    resposta.end();
});


app.listen(porta, host, ()=>{
    console.log(`Servidor escutando em http://${host}:${porta}`)
});