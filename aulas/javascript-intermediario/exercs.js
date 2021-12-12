const minusButton = document.querySelector('.minus')
const plusButton = document.querySelector('.plus')

let exerc1 = 0
let plus
let minus

minusButton.addEventListener('click', () => {
  clearInterval(plus) 
  minusButton.classList.add('active')
  plusButton.classList.remove('active')

  minus = setInterval(() => {
    exerc1--
    document.querySelector('#exerc1').innerHTML = exerc1
  }, 200);
})

plusButton.addEventListener('click', () => {
  clearInterval(minus) 
  plusButton.classList.add('active')
  minusButton.classList.remove('active')

  plus = setInterval(() => {
    exerc1++
    document.querySelector('#exerc1').innerHTML = exerc1
  }, 200);
})

// ------------------------------------------------------------


let cities = {
  'São Paulo': ['Jundiaí', 'Campinas', 'Limeira', 'Atibaia'],
  'Rio de Janeiro': ['Teresópolis', 'Maricá', 'Macaé'],
}

const selectStates = document.querySelector('#states')
const selectCities = document.querySelector('#cities')
// cities abaixo é o objeto de estado e cidades da api
for (const states in cities) {
  selectStates.innerHTML += `<option value="${states}">${states}</option>`
}

selectStates.addEventListener('change', () => {
  const selectedState = selectStates.options[selectStates.selectedIndex].value
  if (selectedState) {
    selectCities.innerHTML = '<option value="" selected>Selecione</option>'

    for (let i = 0; i < cities[selectedState].length; i++) {
      selectCities.innerHTML += `<option value="${cities[selectedState][i]}">${cities[selectedState][i]}</option>`
    }
    divCities = document.querySelector('.cities')
    divCities.classList.add('okay')
  } else {
    selectCities.innerHTML = '<option value="" selected>Selecione</option>'
    divCities = document.querySelector('.cities')
    divCities.classList.remove('okay')
  }
})

selectCities.addEventListener('change', () => {
  const selectedCity = selectCities.options[selectCities.selectedIndex].value
})




const registerForm = document.querySelector('#registerForm')

registerForm.addEventListener('submit', (event) => {
  event.preventDefault()
  
  const selectState = document.forms['registerForm']['states']
  const selectCity = document.forms['registerForm']['cities']
  
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

  validationForm(selectState)
  validationForm(selectCity)

  if(!formError) {
    registerForm.submit()
  }
})
