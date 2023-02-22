//primer paso: seleccionar el elemento del DOM y guardarlos en la variable
const scoreField = document.querySelector('.score')
const checkButton = document.querySelector('.check')
const againButton = document.querySelector('.again')
const guessfield  = document.querySelector('.guess')
const highscoreField = document.querySelector('.highscore')
const messageField = document.querySelector('.message')
const numberField = document.querySelector('.number')


console.log(
  scoreField,
  checkButton,
  againButton,
  guessfield,
  highscoreField,
  messageField,
  numberField
  )

// segundo paso: crear las variables que neceistamos para el juego

let score = 20
let highscore = 0
const secretNumber = Math.trunc(Math.random() * 20) + 1
const number = guessfield.value


scoreField.textContent = 10

checkButton.addEventListener('click', alerta)

function alerta() {
  alert('me hiciste click')
}
