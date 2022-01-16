const mongoose = require('mongoose')

function connect() {
  // umas configurações bobas que o mongoose precisa
  mongoose.set('useNewUrlParser', true)
  mongoose.set('useUnifiedTopology', true)
  
  // conectando banco de dados
  mongoose.connect('mongodb://localhost:27017/api-restful?readPreference=primary&appname=MongoDB%20Compass&directConnection=true&ssl=false')
  
  // instancia conexão
  const db = mongoose.connection
  
  // quando abrir a conexão, leia esse callback
  db.once('open', () => {
    console.log('Connected to database')
  })
  
  // se der algum erro na conexão, leia esse callback
  db.on('error', console.error.bind(console, 'Connection error: '))

}

module.exports = {
  connect
}