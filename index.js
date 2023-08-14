const express = require('express')
const app = express()
const bodyParser = require('body-parser')

// Estou dizendo para o express para o usar o EJS como view engine
app.set('view engine', 'ejs')
app.use(express.static('public'))

app.use(bodyParser.urlencoded({ extended: false }))


app.get('/', (req, res) => {
    res.render("index");
})

app.get('/perguntar', (req, res) => {
    res.render('perguntar')
})

app.post('/salvarpergunta', (req, res) => {
    res.send("Formulário Recebido !")
})

app.listen(3000, (req, res) => {
    console.log("listening on")
})
