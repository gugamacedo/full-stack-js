const express = require('express')

const db = require('./database')
const routes = require('./routes')

// iniciando express
const app = express()

db.connect()

// habilitando o server para receber dados JSON
app.use(express.json())

// definindo as rotas
app.use('/api', routes)

// habilitando a porta
const port = process.env.PORT || 8080
app.listen(port, () => console.log(`Server is listening on port ${port}`))