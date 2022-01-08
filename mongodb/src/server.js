// requires
const express = require('express')
const path = require('path')

// iniciando express
const app = express()

// definindo o motor/engine de visualização
app.set('view engine', 'ejs')
// por padrão ele procura a pasta views na raiz do projeto, como não está, tivemos que especificar abaixo
app.set('views', path.join(__dirname, 'views'))

// definindo a pasta de arquivos públicos
app.use(express.static(path.join(__dirname, 'public')))

// habilitando o server para receber dados via POST (formulário)
app.use(express.urlencoded({ extended: true }))

// criando rotas
app.get('/', (req, res) => {
  res.render('index', {
    title: "teste"
  })
})

app.use((req, res) => res.send('Page not found'))

// armazenando qual porta que a aplicação está rodando
const port = process.env.PORT || 8080

// colocando o servidor pra "escutar" uma porta
app.listen(port, () => console.log(`Server is listening on port ${port}`))