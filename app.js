var express = require('express');
var app = express();
var server = require('http').Server(app);
var session = require('express-session');
var bodyParser = require('body-parser');


//var mysql = require('mysql');

var io = require('socket.io')(server,{log:false});

server.listen(9999,function(){
    console.log("Server connect");
});
//session init
app.use( session({
    secret:'can',
    resave:false,
    saveUninitialized:false
}));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}) );

app.use( express.static(__dirname + '/client' ) );

//DB
var connection;
/* var connection = mysql.createConnection(
     {
       host     : 'localhost',
       user     : 'root',
       password : '',
       database : 'can_schema',
     }
 );*/

/*
var db = require('./daos.js');
var db = new db.db(connection);
*/
//Routes
var Routes = require('./routes.js');
var r = new Routes(app, io);
