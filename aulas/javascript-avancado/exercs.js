const alunos = [
  {
    nome: 'Maria',
    sobrenome: 'da Silva',
    notas: [10, 8],
  },
  {
    nome: 'José',
    sobrenome: 'Moreira',
    notas: [9, 7],
  },
  {
    nome: 'Paulo',
    sobrenome: 'Henrique',
    notas: [8, 6],
  },
  {
    nome: 'Sara',
    sobrenome: 'Souza',
    notas: [7, 5],
  },
  {
    nome: 'Clara',
    sobrenome: 'Barbosa',
    notas: [6, 4],
  },
  {
    nome: 'Rodrigo',
    sobrenome: 'Barros',
    notas: [5, 3],
  },
  {
    nome: 'Renato',
    sobrenome: 'Barros',
    notas: [4, 2],
  },
  {
    nome: 'Andrea',
    sobrenome: 'Batista',
    notas: [3, 1],
  },
  {
    nome: 'Carla',
    sobrenome: 'Campos',
    notas: [10, 8],
  },
]




const $exerc1 = document.querySelector('#exerc1')
const $exerc2 = document.querySelector('#exerc2')
const $exerc4 = document.querySelector('form')
const $exerc5 = document.querySelector('#exerc5')

$exerc1.addEventListener('click', () => {
  const newAlunos = alunos.map(aluno => `${aluno.nome} ${aluno.sobrenome}`)
  console.log(newAlunos)
})

$exerc2.addEventListener('click', () => {
  const average = 6 
  const newAlunos = alunos.filter(aluno => (aluno.notas.reduce((total, current) => total + current, 0))/aluno.notas.length >= average)
  console.log(newAlunos)
})

$exerc4.addEventListener('submit', (e) => {
  e.preventDefault()
  let $average = document.querySelector('#exerc4').value
  if(!$average){
    $average = 6
  }
  const newAlunos = alunos.filter(aluno => (aluno.notas.reduce((total, current) => total + current, 0))/aluno.notas.length == $average)
  console.log(!newAlunos.length ? 'Nenhum aluno com essa média' : newAlunos)
  $average = '' 
})

$exerc5.addEventListener('click', () => {
  msg("Promise resolvida")
    .then(console.log)
    .catch(console.error);
})

function msg(msg) {
  return new Promise((resolve, reject) => {
    document.querySelector('.loading').classList.add('active')
    $exerc5.classList.add('desactive')
    setTimeout(() => {
      if (!msg) {
        reject("Deu erro")
      }
      resolve(msg)
      document.querySelector('.loading').classList.remove('active')
      $exerc5.classList.remove('desactive')
    }, 3000)
  })
}