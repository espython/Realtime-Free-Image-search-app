const express = require('express')
var exphbs = require('express-handlebars');

const app = express()
app.use(express.static('public'));

app.engine('handlebars', exphbs({
    defaultLayout: 'main'
}));
app.set('view engine', 'handlebars');

app.get('/', function(req, res) {
    res.render('home');
});

app.listen(3000, function() {
    console.log('Example app listening on port 3000!')
})
