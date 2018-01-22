var express = require('express');
var todoController = require('./controllers/todocontroller')
var app = express();

// set up template engine
app.set('view engine', 'ejs');

//static files
app.use(express.static('./public'));

//fire controllers
todoController(app);

//Listen to the port
app.listen(3000);

