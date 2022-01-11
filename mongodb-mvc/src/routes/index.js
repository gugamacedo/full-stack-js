const router = require('express').Router()

const CustomersController = require('../controllers/customers')
const IndexController = require('../controllers/index')

// criando rotas
router.get('/', IndexController.index)

// registro
router.get('/register', CustomersController.index)
router.post('/register/add', CustomersController.add)

// lista usuários
router.get('/list', CustomersController.list)

// editar
router.get('/edit', CustomersController.formEdit) // traz o formulário, renderiza
router.post('/edit/:id', CustomersController.edit) // update. O /:id diz que a rota vai receber um parâmetro

// deletar
router.get('/remove/:id', CustomersController.remove)

module.exports = router