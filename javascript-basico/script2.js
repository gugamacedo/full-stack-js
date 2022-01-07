function welcome() {
  const person = prompt('Digite seu nome')
  const age = parseInt(prompt('Digite sua idade'))
  if (person !== '' && age.toString() !== 'NaN') {
    document.querySelector('#exerc1').innerHTML = `Olá, ${person}, você é ${
      age >= 18 ? 'maior' : 'menor'
    } de idade.`

    if (person.toLowerCase() === 'jeca') {
      document.querySelector('#exerc2').innerHTML = `Choreiiii larrrrgado`
    } else {
      document.querySelector('#exerc2').innerHTML = ''
    }
  } else {
    alert('Preencha os campos corretamente!')
  }
}

function tabuada() {
  const num = parseInt(prompt('Qual número?'))
  if (num.toString() !== 'NaN') {
    for (let i = 1; i <= 10; i++) {
      document.querySelector('#exerc5').innerHTML += `${num} x ${i} = ${
        num * i
      }<br>`
    }
  } else {
    alert('Preencha o campo corretamente!')
  }
}

let listaAtrizes = [
  {
    nome: 'Zooey Deschanel',
    personagem: 'Summer',
    filme: '500 days of summer',
  },
  {
    nome: 'Rachel McAdams',
    personagem: 'Mary',
    filme: 'Questão de Tempo',
  },
  {
    nome: 'Audrey Tautou',
    personagem: 'Amélie Poulain',
    filme: 'O Fabuloso Destino de Amélie Poulain',
  },
]

for (let i = 0; i < listaAtrizes.length; i++) {
  document.querySelector('.container').innerHTML += `
    <div>
      <h1>${listaAtrizes[i].nome}</h1>
      <p>Interpretou <strong>${listaAtrizes[i].personagem}</strong>, no filme <strong>${listaAtrizes[i].filme}</strong></p>
    </div>`
}
