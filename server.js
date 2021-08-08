'use strict';

const express = require('express');
const app = express();
const notFoundHandler = require('./handlers/404');
const errorHandler = require('./handlers/500');

function start(PORT) {
    app.listen(PORT, ()=> console.log(`Running on Port ${PORT}`))
}

app.get('/', (req, res)=> {
    res.send('Hello World')
});

app.post('/bad', (req,res)=> {
    let num = 10;
    num.forEach(i=> console.log(i));
    res.send('Bad Route');
})

app.get('/data', (req, res)=> {
    res.json({
       id: 5, 
       name: "Nedal Student",
       email: "Nedal@Student.com"
    });
});

app.use('*', notFoundHandler);
app.use(errorHandler);

module.exports = {
    app: app,
    start: start
}