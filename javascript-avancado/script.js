// quando tem só um parâmetro, pode ocultar o ()
const message = msg => console.log(msg)
message('Oi')

// numa arrow function o escopo do this será o escopo de quem chamou ela anteriormente à função anônima 
//                                                  (já que é anônima não reconhece o escopo da função)

const clients = [
  {
    name: 'Fulano',
    lastName: 'da Silva',
    age: 14,
    score: 80
  },
  {
    name: 'Ciclano',
    lastName: 'da Silva',
    age: 18,
    score: 60
  },
  {
    name: 'Beltrano',
    lastName: 'da Silva',
    age: 19,
    score: 90
  }
]

// o método map é um manipulador de array, ele percorre o array velho e retorna um novo array montado

// você pode fazer isso com o foreach
const clientsFinal1 = []
clients.forEach(client => clientsFinal1.push(`${client.name} ${client.lastName}`))
console.log(clientsFinal1)

// mas fica mais clean, menos verboso e mais profissional usar o map
const clientsFinal2 = clients.map(client => `${client.name} ${client.lastName}`)
console.log(clientsFinal2)

// FILTER, o nome já é auto explicativo kkk faz a mesma coisa que o MAP, mas com um filtro
const clientsAdult = clients.filter(client => client.age >= 18)
console.log(clientsAdult)

// REDUCE, faz a mesma coisa que o MAP, mas não é obrigado a retornar array, pode ser outra estrutura

// acc = accumulator
// curr = current

const clientsFinal3 = clients.reduce((acc, curr) => {
  curr.score >= 70 ? acc.pass.push(curr) : acc.fail.push(curr) 
  return acc
}, {
  pass: [],
  fail: []
  }
)

console.log(clientsFinal3)

// JSON
const clientsJson = JSON.stringify(clients) // transforma o objeto js em json
console.log(clientsJson)
console.log(clientsJson[0].name) // não dá pra acessar propriedades em json pois ele é uma string
const clientsParse = JSON.parse(clientsJson) // transforma o json em objeto js
console.log(clientsParse[0].name) // agora sim você consegue acessar as propriedades




// Local Storage
localStorage.setItem('clients', clientsJson) // "setar" o item no navegador
const clientsTest = JSON.parse(localStorage.getItem('clients')) // "pega" o item e transforma o json que veio em objeto js
console.log(clientsTest)

// AJAX é uma técnica para fazer requisições para um determinado servidor. Foi "substituída" pelo FETCH API

// CALLBACK é uma função que chama outra função

// PROMISES, bem parecido com callback, ela "promete" chamar uma função dentro de uma função, 
// assim que ela terminar a execução. Usada principalmente para códigos assincronos

function JsonTransform(response){
  return response.json()
}

function showData(dados) {
  const {name: nome, address: cidade} = dados[0] // Desestructuring Assignment (atribuição desestruturada)
  // você pega as propriedades do primeiro indice do objeto dados, e cria duas constantes 
  // cada uma com o nome da propriedade correspondente, ou um nome personalizado
  console.log(`${nome} mora em ${cidade.city}`)
  console.log(dados)
}

function showError() {
  console.log('Ops, recurso não encontrado!')
}

const $loadButton = document.querySelector('#loadButton')

$loadButton.onclick = async () => {
  await fetch('https://jsonplaceholder.typicode.com/users/')
  .then(JsonTransform)
  .then(showData)
  .catch(showError)

  console.log('Dados acima')
}

// ASYNC/AWAIT é uma estrutura de código que nos permite transformar 
// uma determinada chamada assíncrona em síncrona, ou seja, fazer esperar a execução. 
// Exemplo acima o FETCH que sem o ASYNC/AWAIT acabaria sendo executado depois do console.log

// Toda função que tem um await dentro, precisa ser async