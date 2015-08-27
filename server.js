var express = require('express'),
    app = express();

app.set('view engine', 'ejs');

app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res){
    res.render('pad');
});

var port = process.env.port || 8000;
app.listen(port);
