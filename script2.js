//primer paso: seleccionar el elemento del DOM y guardarlos en la variable
const scoreField = document.querySelector('.score')
const checkButton = document.querySelector('.check')
const againButton = document.querySelector('.again')
const guessField = document.querySelector('.guess')
const highscoreField = document.querySelector('.highscore')
const messageField = document.querySelector('.message')
const numberField = document.querySelector('.number')
const bodyField = document.querySelector('body')

// segundo paso: crear las variables que neceistamos para el juego

let score
let highscore

// obtener un numero aleatorio entre 1 y 20
const MIN_NUMBER = 1
const MAX_NUMBER = 20
let secretNumber

fnInitApp()

// mostrar el numero secreto en la consola

// tercer paso: añadir un listener al checkButton y mostrar
// un mensaje que diga si el numero es mayor o menor en el campo messageField
//...
checkButton.addEventListener('click', function () {
  const number = Number(guessField.value)
  console.log('El numero que ingresaste es'.number)
  if (!number) {
    messageField.textContent = 'Escribe un numero!'
  } else if (number > secretNumber) {
    messageField.textContent = 'Muy alto!'
    score--
    scoreField.textContent = score
  } else if (number < secretNumber) {
    messageField.textContent = 'Muy bajo!'
    score--
    scoreField.textContent = score
  } else {
    messageField.textContent = 'Correcto!'
    if (score > highscore) {
      highscore = score
      highscoreField.textContent = score
    }
  }
})
//otra forma:
// checkButton.addEventListener('click', fnCheckButton)

// function mostrarMensaje(mensaje) {
// messageField.textContent = mensaje
//}
//function fnCheckButton(){
//const number = Number (guessField.value)
//if (number=== secretNumber) {
//mostrarMensaje('Correcto!')
//bodyField.style.backgroundColor = '#60b347'
//numberField.style.width = '30rem'
//numberField.textContent = secretNumber
//if (score>highscore) highscore = highscoreField.textContent = score
// } else {
// const mensaje=
// number>secretNumber ? 'Muy alto!' : 'Muy bajo!'
// mostrarMensaje(mensaje)
// score--
// scoreField.textContent = score
// }
// score===0 && mostrarMensaje('Intentalo de nuevo!')
// bodyField.style.backgroundColor = 'red'

//}

//cuarto paso: añadir un listener al againButton y resetear el juego

againButton.addEventListener('click', fnInitApp)

function fnInitApp() {
  score = 20
  scoreField.textContent = score
  messageField.textContent = 'Start guessing...'
  guessField.value = ''
  secretNumber =
    Math.trunc(Math.random() * (MAX_NUMBER - MIN_NUMBER + 1)) + MIN_NUMBER
  console.log('El numero secreto es'.secretNumber)
  numberField.textContent = '?'
  bodyField.style.backgroundColor = '#222'
  numberField.style.width = '15rem'
}
