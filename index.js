const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const connection = require('./database/database')
const Pergunta = require('./database/Pergunta')

//Database
connection
    .authenticate()
    .then(() => {
        console.log('Conexão feita com o banco de dados!')
    })
    .catch((msgErr) => {
        console.log(msgErr)
    })

// Estou dizendo para o express para o usar o EJS como view engine
app.set('view engine', 'ejs')
app.use(express.static('public'))

// BodyParser
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

//Routes
app.get('/', (req, res) => {
    Pergunta.findAll({raw: true}).then(perguntas => {
        res.render("index", {
            perguntas: perguntas
        });
    })
    
})

app.get('/perguntar', (req, res) => {
    res.render('perguntar')
})

app.post('/salvarpergunta', (req, res) => {
    var titulo = req.body.titulo;
    var descricao = req.body.descricao;
    Pergunta.create({
        titulo: titulo,
        descricao: descricao
    }).then(() => {
        res.redirect('/')
    }).catch((msgErr) => {
        console.log(msgErr);
    })
})

//Init server
app.listen(3000, (req, res) => {
    console.log("listening on")
})
