document.querySelector('#titulo').innerHTML = '<i>Oi</i>'

document.querySelector('a').innerText = '<i>Hi</i>'

document.querySelectorAll('a').forEach((e) => e.innerHTML = 'Hi')

document.querySelectorAll('.box').forEach((e, index) => e.innerHTML = `Holla ${index+1}`)


// ---------------------------------------------------------------------------------



function openMenu(){
  document.querySelector('.menuMobile.aberto') ? 
  document.querySelector('.menuMobile').classList.remove('aberto') : 
  document.querySelector('.menuMobile').classList.add('aberto')
}


// ---------------------------------------------------------------------------------


const testButton = document.querySelector('#testButton')

let count = 0

function clickButton() {
  count++
  document.querySelector('#ola').innerHTML += `<p>Olá ${count}</p>`
  // alert(`Oi ${count}`)

  if (count >= 5){
    testButton.removeEventListener('click', clickButton)
  }
}

testButton.addEventListener('click', clickButton)


// ---------------------------------------------------------------------------------

let square = document.querySelector('.square')

function hello(){
  square.innerHTML = 'Hello'
}

function bye() {
  square.innerHTML = 'Bye'
}

// square.onclick = hello
// square.onmousemove = hello
// square.onmouseout = hello
square.onmouseenter = hello

square.addEventListener('mouseout', bye)

// document.querySelector('html').onmouseleave = () => alert('Volte pra página :c')


// ---------------------------------------------------------------------------------



const toast = document.querySelector('.toast')
const registerButton = document.querySelector('.register')
const task = document.querySelector('#task')

registerButton.addEventListener('click', () => {
  toast.innerHTML = `Tarefa ${task.value} cadastrada com sucesso!`
  toast.classList.add('visible')
  setTimeout(() => toast.classList.remove('visible'), 3000)
})



// ---------------------------------------------------------------------------------




const registerForm = document.querySelector('#registerForm')

registerForm.addEventListener('submit', (message) => {
  message.preventDefault()
  
  const inputName = document.forms['registerForm']['name']
  const inputEmail = document.forms['registerForm']['email']
  const selectCity = document.forms['registerForm']['city']
  
  let formError = false
  
  function validationForm(field) {
    if (!field.value) {
      formError = true
      field.classList.add('inputError')
  
      const spanError = field.nextSibling.nextSibling
      spanError.innerText = 'Preencha o campo'
    } else {
      field.classList.remove('inputError')
  
      const spanError = field.nextSibling.nextSibling
      spanError.innerText = ''
    }
  }

  validationForm(inputName)
  validationForm(inputEmail)
  validationForm(selectCity)

  if(!formError) {
    registerForm.submit()
  }
})