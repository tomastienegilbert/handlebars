const express = require('express');
const {create} = require('express-handlebars');
const app = express();
const chalk = require('chalk');

//Partials
const hbs = create({
    partialsDir: ["views/componentes"],
    extname: ".hbs"
});

//motor de plantillas
app.engine('.hbs', hbs.engine);
app.set('view engine', '.hbs');
app.set('views', './views');


app.get('/', (req, res) => {
    const productos = ["banana", "cebollas", "lechuga", "papas", "pimenton", "tomate"];

    res.render('home', { productos });
});


//Middleware
app.use(express.static(__dirname + '/public'));
app.use("/css/bootstrap.min.css", express.static(__dirname + '/node_modules/bootstrap/dist/css/bootstrap.min.css'));
app.use("/js/bootstrap.min.js", express.static(__dirname + '/node_modules/bootstrap/dist/js/bootstrap.min.js'));


//levantar servidor
app.listen(3000, () => console.log(chalk.green.bold("El servidor está inicializado en el puerto 3000")));


