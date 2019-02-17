const express = require('express');
const app = express();
const port = 3000;
const bodyParser = require('body-parser');

//Controllers
const HomeController = require('./controllers/home-controller');
const UserController = require('./controllers/user-controller');

//View Engine
const exphbs = require('express-handlebars');
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

//Body parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

//Routes
app.get('/', HomeController.index);
app.get('/about', HomeController.about);

app.get('/login', UserController.loginGet);
app.post('/login', UserController.loginPost);

app.get('/friends/:id', (req, res) => {
    let id = req.params.id;
    res.send(`<h1>You have requested: ${id}</h1>`);
});

app.get('*', (req, res) => {
    res.send('<h1>404</h1><h2>Not found!</h2>')
});

app.listen(port, () => {
    console.log(`Server listening on port: ${port}! http://localhost:3000/`);
});