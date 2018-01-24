var bodyParser = require('body-parser');

var mongoose = require('mongoose')

//var data = [{item: 'Get Some Milk'}, {item: 'Walk Dog'}, {item: 'Kick Some Code Ass'}]
var urlencodedParser = bodyParser.urlencoded({ extended: false });

//Connect Database
mongoose.connect('mongodb://test:test@ds111608.mlab.com:11608/todo-app');

//Create Schema
var todoSchema = new mongoose.Schema({
    item: String
});

var todoS = mongoose.model('todoS', todoSchema);



module.exports = function(app) {
    app.get('*', function(req, res){
        todoS.find({}, function(err, data){
            if (err) throw err;
            res.render('todo', {todos: data});
        })
    });

    app.post('*', urlencodedParser, function(req, res){
        var newTodo = todoS(req.body).save(function(err, data){
            if (err) throw err;
            res.json(data);
        });
    });

    app.delete('/todo/:item', function(req, res){
        todoS.find({item: req.params.item.replace(/\-/g, " ")}).remove(function(err, data){
            if (err) throw err;
            res.json(data);
        })
    });
};