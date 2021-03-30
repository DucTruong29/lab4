var express = require('express');
var expressHDS = require('express-handlebars')
var app = express()
app.engine("handlebars", expressHDS({
    layoutsDir: __dirname + '/views/layouts',
    defaultLayout: 'main'
}))
app.set('view engine', 'handlebars')
app.get('/', function (request, response){
    var dulieu = 'HELOOOOOOOOO';
    var arr = [4 , 5 , 67, 4, 3, 34, 6, 7, 67, 65, 5, 5];

    response.render('a', {title: dulieu, array: arr});
});

app.post('/login', function (request, response){

});

app.listen((process.env.PORT || '3000'))