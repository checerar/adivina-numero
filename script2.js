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
// obtener un numero aleatorio entre 1 y 20
const MIN_NUMBER = 1
const MAX_NUMBER = 20
const secretNumber = Math.trunc(Math.random() * MAX_NUMBER) + MIN_NUMBER

const number = guessfield.value

console.log(`El numero secreto es ${secretNumber}´)
console.log(`El numero que ingresaste es ${number}´)

// tercer paso: añadir un listener al checkButton y mostrar
// un mensaje que diga si el numero es mayor o menor en el campo messageField
//...


