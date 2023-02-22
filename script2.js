//primer paso: seleccionar el elemento del DOM y guardarlos en la variable
const scoreField = document.querySelector('.score')
const checkButton = document.querySelector('.check')
const againButton = document.querySelector('.again')
const guessfield  = document.querySelector('.guess')
const highscoreField = document.querySelector('.highscore')
const messageField = document.querySelector('.message')
const numberField = document.querySelector('.number')

//segundo paso: crear la variable que va a guardar el valor del score

console.log(
  scoreField,
  checkButton,
  againButton,
  guessfield,
  highscoreField,
  messageField,
  numberField
  )

scoreField.textContent = 10

checkButton.addEventListener('click', alerta)

function alerta() {
  alert('me hiciste click')
}
