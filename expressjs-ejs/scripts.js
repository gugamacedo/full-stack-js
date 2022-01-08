// os require tem que ser a primeira coisa no código
const express = require('express')
const path = require('path')
const fs = require('fs')

// inicializando o express
const app = express()

// definindo o template engine
app.set('view engine', 'ejs')

/* // definindo arquivos estáticos

const staticFolder = path.join(__dirname, 'views')
const expressStatic = express.static(staticFolder)
app.use(expressStatic)
 */

/* // definindo arquivos públicos

const publicFolder = path.join(__dirname, 'public')
const expressPublic = express.static(publicFolder)
app.use(expressPublic)
 */

// profissionalmente se usa assim \/

// app.use(express.static(path.join(__dirname, 'views')))
// como estamos usando template engine, isso não é necessário /\
app.use(express.static(path.join(__dirname, 'public'))) // esse é o famigerado middleware

app.use(express.urlencoded({ extended: true })) // esse middleware habilita o server receber dados via POST de um form

// definindo rotas

// app.get('/', (req, res) => res.render('views/index'))
// como estamos usando template engine, isso não é necessário /\
app.get('/', (req, res) =>
  res.render('index', {
    // passando um objeto com os valores que quero passar pra página
    title: 'Home Page',
  })
)

app.get('/posts', (req, res) =>
  res.render('posts', {
    title: 'Posts Page',
    posts: [
      {
        title: 'Javascript vs Python: prefiro C#',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem sapiente velit aliquid saepe repellendus ratione mollitia voluptatem ducimus consequuntur! Ipsum nemo in quas incidunt autem dolore quisquam modi illo iusto.',
        stars: 5,
        star_icon: '/assets/star.svg',
      },
      {
        title: 'Golang vs Rust: prefiro C#',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem sapiente velit aliquid saepe repellendus ratione mollitia voluptatem ducimus consequuntur! Ipsum nemo in quas incidunt autem dolore quisquam modi illo iusto.',
      },
      {
        title: 'React vs Angular: prefiro C#',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem sapiente velit aliquid saepe repellendus ratione mollitia voluptatem ducimus consequuntur! Ipsum nemo in quas incidunt autem dolore quisquam modi illo iusto.',
        stars: 3,
        star_icon: '/assets/star.svg',
      },
    ],
  })
)

app.get('/register_posts', (req, res) => {
  // console.log(req.query)
  const { c } = req.query // aqui o método é GET, então se usa o 'query', mas no POST se usa o 'body'
  res.render('register_posts', {
    title: 'Register Posts',
    registered: c
  })
})

app.post('/save_post', (req, res) => {
  const {title, description} = req.body

  const data = fs.readFileSync('./store/posts.json') // esse readFile é sincrono, retorna uma string
  const posts = JSON.parse(data)

  posts.push({
    title,
    description
  })

  fs.writeFileSync('./store/posts.json', JSON.stringify(posts)) // salvando os dados no arquivo
  res.redirect('/register_posts?c=1')
})

app.use((req, res) => res.send('Surprise motherfucker!!!'))

const port = process.env.PORT || 8080
app.listen(port, () => console.log(`Server is listening on port ${port}`))
