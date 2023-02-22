//primer paso: seleccionar el elemento del DOM y guardarlos en la variable
const scoreField = document.querySelector('.score')
const checkButton = document.querySelector('.check')
scoreField.textContent = 10

checkButton.addEventListener('click', alerta)

function alerta() {
  alert('me hiciste click')
}
