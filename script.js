const measureKelvin = function () {
  const measurement = {
    type: 'temp',
    unit: 'celsius',
    value: prompt('Introduce los grados Celsius'),
  }
  console.log('measurement', measurement)
  const kelvin = measurement.value + 273
  console.log('kelvin', kelvin)
  return kelvin
}
console.log('voy a ejecutar la funcion')
measureKelvin()
console.log('funcion ejecutada')
