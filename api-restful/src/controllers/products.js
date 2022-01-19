const ProductsModel = require('../models/products')

async function get(req, res) {
  const { id } = req.params

  const products = await ProductsModel.find(id ? { _id: id} : {})

  res.send(products)
}

async function post(req, res) {
  const { name, brand, price } = req.body

  const product = new ProductsModel({ name, brand, price })

  product.save()
  
  res.send({
    message: 'success',
    product
  })
}

async function put(req, res) {
  const { id } = req.params

  const product = await ProductsModel.findOneAndUpdate({ _id: id }, req.body, { new: true, useFindAndModify: false })

  res.send({
    message: 'success',
    product
  })


/* Essa é outra forma (menos profissional) de se fazer isso   
  const product = await ProductsModel.findOne({ _id: id})

  await product.updateOne(req.body)

  res.send({
    message: 'success',
    product
  }) */
}

async function del(req, res) {
  const { id } = req.params

  const product = await ProductsModel.deleteOne({ _id: id })

  const message = product.deletedCount ? 'success' : 'error'

  res.send({
    message
  })
}

module.exports = { get, post, put, del }
