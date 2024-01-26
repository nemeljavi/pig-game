// seleccionar elementos del DOM
const btnNew = document.querySelector('.btn--new')
const btnRoll = document.querySelector('.btn--roll')
//const btnHold = document.querySelector('.btn--hold')
const btnHold = document.getElementsByClass('btn--hold')[0]

console.log(btNew, btnRoll, btnHold)


btnRoll.addEventListener('click', function () => {
  console.log('Roll dice')
  })

btnNew.addEventListener('click', function () => {
  console.log('New game')
  })

btnHold.addEventListener('click', function () => {
  console.log('Pasar turno')
  })