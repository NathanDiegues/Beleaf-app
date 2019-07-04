const express = require('express');
const path = require('path'); //definidor de caminhos de arquivos
const { createEngine } = require('express-react-views'); //criar engine de views;

const PORT = process.env.PORT || 3000; //define a porta

const server = express(); //define o servidor

server.set('views', path.resolve('./views')); //define pasta de views
server.set('view engine', 'js'); //define o tipo de engine de view

server.engine('js', createEngine()); 

var mysql = require('mysql');
var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'test',
});

connection.connect();

connection.query('SELECT * FROM `kek`', function (err, rows, fields) {
    if (err) throw err;

    rows.forEach(element => {
        console.log('The solution is: ', element );
    });

});


require('./routes/html-routes')(server, connection);
/* Start the server */
server.listen(PORT, () => {
    console.log('server listening on port: '+ PORT);
});

server.get('/', function(req, res, next){
    res.render('index.js');
});