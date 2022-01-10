const router = require('express').Router()

const CustomersController = require('../controllers/customers')

// criando rotas
router.get('/', (req, res) => {
  res.render('index', {
    title: "Home"
  })
})

router.get('/register', (req, res) => {
  res.render('register', {
    title: "Cadastro"
  })
})

router.post('/register/add', CustomersController.add)

module.exports = router