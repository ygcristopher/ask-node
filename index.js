const express = require('express')
const app = express()

// Estou dizendo para o express para o usar o EJS como view engine
app.set('view engine', 'ejs')
app.use(express.static('public'))


app.get('/', (req, res) => {
    res.render("index");
})

app.get('/perguntar', (req, res) => {
    res.render('perguntar')
})

app.listen(3000, (req, res) => {
    console.log("listening on")
})
