// alert('oi')
console.log('oi')
// document.write('oi')

document.querySelector('#frase').innerHTML = 'EUREKA!!!'

const pessoa = {
  nome: 'Fulano',
  sobrenome: 'da Silva',
  idade: 30,
  habilidades: ['js', 'css/sass', 'python', 'java'],
}

console.log(pessoa)
console.log(pessoa['habilidades'])
console.log(pessoa['habilidades'][2])

const diaSemana = new Date().getDay()
let nomeDiaSemana

switch (diaSemana) {
  case 0:
    nomeDiaSemana = 'domingo'
    break
  case 1:
    nomeDiaSemana = 'segunda'
    break
  case 2:
    nomeDiaSemana = 'terça'
    break
  case 3:
    nomeDiaSemana = 'quarta'
    break
  case 4:
    nomeDiaSemana = 'quinta'
    break
  case 5:
    nomeDiaSemana = 'sexta'
    break
  case 7:
    nomeDiaSemana = 'sábado'
    break
}

console.log(`Hoje é ${nomeDiaSemana}`)


for (let i = 1; i <= 10; i++) {
  console.log(i)
}



let opcoes = '<option selected>Selecione</option>'

for (let i = 2021; i >= 1900; i--) {
  opcoes += `<option>${i}</option>`  
}
console.log(opcoes)
document.querySelector('#anoNasc').innerHTML=opcoes

const clientes = ['Fulano', 'Beltrano', 'Ciclano']

let li = ''

for (let i = 0; i < clientes.length; i++) {
  li += `<li>${clientes[i]}</li>`  
}

document.querySelector('#listaClientes').innerHTML=li


const clientes2 = [
  {
    nome: 'Fulano',
    sobrenome: 'da Silva',
    idade: 30,
    habilidades: ['css/sass']
  },
  {
    nome: 'Beltrano',
    sobrenome: 'da Silva',
    idade: 35,
    habilidades: ['js']
  },
  {
    nome: 'Ciclano',
    sobrenome: 'da Silva',
    idade: 40,
    habilidades: ['python']
  }
]

let clientesLista = ''

for (const cliente of clientes2) {
  let listaLangs = ''
  for (const linguagem of cliente.habilidades) {
    listaLangs += `<li>${linguagem}</li>`
  }
  clientesLista += `
  <li>
    <b>Nome:</b> ${cliente.nome}<br>
    <b>Sobrenome:</b> ${cliente.sobrenome}<br>
    <b>Idade:</b> ${cliente.idade}<br>
    <b>Linguagens:</b><br>
    <ul>
    ${listaLangs}
    </ul>
    <br>
  </li>`
}

document.querySelector('#listaClientes2').innerHTML=clientesLista