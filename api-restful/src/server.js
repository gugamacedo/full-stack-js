const express = require('express')
const cors = require('cors')

const db = require('./database')
const routes = require('./routes')

// iniciando express
const app = express()

db.connect()

// habilita CORS
app.use(cors({origin: 'http://127.0.0.1:5500'}))

// habilitando o server para receber dados JSON
app.use(express.json())

// definindo as rotas
app.use('/api', routes)

// habilitando a porta
const port = process.env.PORT || 8080
app.listen(port, () => console.log(`Server is listening on port ${port}`))
